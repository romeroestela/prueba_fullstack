import { OperationEntry, NonSensitiveInfoEntry, newOperationEntry } from '../types'
import { AppDataSource } from '../data-source'
import { Operations } from '../entity/Operations'
import { Marketer } from '../entity/Marketer'
import { Type } from '../enums'

const operationRepository = AppDataSource.getRepository(Operations)
const marketerRepository = AppDataSource.getRepository(Marketer)

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

// Clase de error personalizada para manejar errores de validación
class ValidationError extends Error {
  public statusCode: number
  constructor (message: string) {
    super(message)
    this.name = 'ValidationError'
    this.statusCode = 400 // Código de error para solicitudes incorrectas
  }
}

export const addOperation = async (newOperationEntry: newOperationEntry): Promise<OperationEntry> => {
  const { marketer_id, client_id, type, amount, price } = newOperationEntry

  try {
    const marketer = await marketerRepository.findOne({ where: { id: marketer_id } })
    if (marketer == null) {
      throw new ValidationError(`Comercializadora con ID ${marketer_id} no encontrada`)
    }

    const client = await marketerRepository.findOne({ where: { id: client_id } })
    if (client == null) {
      throw new ValidationError(`Cliente con ID ${client_id} no encontrado`)
    }

    const newOperation = operationRepository.create({
      marketer,
      client,
      type,
      amount,
      price
    })

    const savedOperation = await operationRepository.save(newOperation)

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
      throw new Error('Error al guardar la operación')
    }
  }
}
