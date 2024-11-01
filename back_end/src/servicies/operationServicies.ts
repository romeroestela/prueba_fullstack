import { OperationEntry, NonSensitiveInfoEntry, newOperationEntry } from '../types'
import operationData from '../operations.json'
import marketerData from '../marketers.json'

const operations: OperationEntry[] = operationData as OperationEntry[]
const marketers = marketerData as Array<{ id: number, name: string }>

export const getEntries = (): OperationEntry[] => operations

// Función para obtener el nombre de una comercializadora a partir del ID
const getMarketerNameById = (id: number): string => {
  const marketer = marketers.find(m => m.id === id)
  return (marketer != null) ? marketer.name : 'Desconocido'
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoEntry[] => {
  return operations.map(({ type, amount, price, marketer_id, client_id }) => {
    return {
      type,
      amount,
      price,
      marketer_name: getMarketerNameById(marketer_id),
      client_name: getMarketerNameById(client_id)
    }
  })
}

export const addOperation = (newOperationEntry: newOperationEntry): OperationEntry => {
  const newOperation = {
    id: Math.max(...operations.map(d => d.id)) + 1, // Esta línea crea un nuevo ID encontrando el número más alto y sumándole 1.
    ...newOperationEntry
  }

  operations.push(newOperation)
  return newOperation
}
