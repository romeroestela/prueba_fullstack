import { OperationEntry, NonSensitiveInfoEntry, Type } from '../types'
import operationData from '../operations.json'
import marketerData from '../marketers.json'

const operations: OperationEntry[] = operationData as OperationEntry[]
const marketers = marketerData as { id: number; name: string }[]

export const getEntries = (): OperationEntry[] => operations

// Función para obtener el nombre de una comercializadora a partir del ID
const getMarketerNameById = (id: number): string => {
  const marketer = marketers.find(m => m.id === id);
  return marketer ? marketer.name : 'Desconocido';
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoEntry[] => {
  return operations.map(({ type, amount, price, marketer_id, client_id }) => {
    return {
      type,
      amount,
      price,
      market_name: getMarketerNameById(marketer_id),
      client_name: getMarketerNameById(client_id),
    }
  })
}

export const addOperation = (marketer_id: number, client_id: number, type: Type, amount: number, price: number): OperationEntry => {
  const newOperationEntry = {
    id: Math.max(...operations.map(d => d.id)) + 1, //Esta línea crea un nuevo ID encontrando el número más alto y sumándole 1.
    marketer_id,
    client_id,
    type,
    amount,
    price,
    market_name: getMarketerNameById(marketer_id),
    client_name: getMarketerNameById(client_id)
  }

  operations.push(newOperationEntry)
  return newOperationEntry
}
