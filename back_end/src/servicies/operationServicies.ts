import { OperationEntry, NonSensitiveInfoEntry, newOperationEntry } from '../types'
import { AppDataSource } from '../data-source'
import { Operations } from '../entity/Operations'
import { Marketer } from '../entity/Marketer'
import { Type } from '../enums'
import ValidationError from '../errors/ValidationError'

const operationRepository = AppDataSource.getRepository(Operations)
const marketerRepository = AppDataSource.getRepository(Marketer)

// Obtiene todas las operaciones sin mostrar datos sensibles (los clientes o comercializadoras desconocidos se muestran como "Desconocidos" esto puede suceder si se ha eliminado la comercializadora, ya que sigue guardandose la operación)
export const getEntriesWithoutSensitiveInfo = async (): Promise<NonSensitiveInfoEntry[]> => {
  const operations = await operationRepository.find({
    relations: ['marketer', 'client']
  })

  return operations.map(({ id, type, amount, price, marketer, client }) => ({
    id,
    type,
    amount,
    price,
    marketer_name: marketer ? marketer.name : 'Desconocido',
    client_name: client ? client.name : 'Desconocido'
  }))
}

// Agrega una nueva operación, validando los IDs y que los datos existan en la base de datos
export const addOperation = async (newOperationEntry: newOperationEntry): Promise<OperationEntry> => {
  const { marketer_id, client_id, type, amount, price } = newOperationEntry

  try {
    // Validar que la comercializadora y el cliente no peden ser el mismo
    if (marketer_id === client_id) {
      throw new ValidationError('El ID de tu comercializadora no puede ser el mismo que el del cliente')
    }

    // Verifica que la comercializadora exista
    const marketer = await marketerRepository.findOne({ where: { id: marketer_id } })
    if (marketer == null) {
      throw new ValidationError(`Comercializadora con ID ${marketer_id} no encontrada`)
    }

    // Verifica que el cliente exista
    const client = await marketerRepository.findOne({ where: { id: client_id } })
    if (client == null) {
      throw new ValidationError(`Cliente con ID ${client_id} no encontrado`)
    }

    // Crea y guarda la operación con los datos proporcionados
    const newOperation = operationRepository.create({
      marketer,
      client,
      type,
      amount,
      price
    })

    const savedOperation = await operationRepository.save(newOperation)

    // Retorna la operación guardada con los datos organizados
    return {
      id: savedOperation.id,
      marketer_id: savedOperation.marketer.id,
      client_id: savedOperation.client.id,
      type: savedOperation.type as Type,
      amount: savedOperation.amount,
      price: savedOperation.price,
      marketer_name: marketer.name,
      client_name: client.name
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error // Los errores de validación se envían al controlador para una respuesta específica
    } else {
      throw new Error('Error al guardar la operación') // Error génerico si la operación falla
    }
  }
}
