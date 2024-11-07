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

  return operations.map(({ type, amount, price, marketer, client }) => ({
    type,
    amount,
    price,
    marketer_name: marketer ? marketer.name : 'Desconocido',
    client_name: client ? client.name : 'Desconocido'
  }))
}

export const addOperation = async (newOperationEntry: newOperationEntry): Promise<OperationEntry> => {
  const { marketer_id, client_id, type, amount, price } = newOperationEntry

  const marketer = await marketerRepository.findOne({ where: { id: marketer_id } })
  const client = await marketerRepository.findOne({ where: { id: client_id } })

  if ((marketer == null) || (client == null)) {
    throw new Error('Comercializadora o Cliente no encontrados')
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
}
