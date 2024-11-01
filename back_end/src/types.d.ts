import { Type } from './enums'

export interface OperationEntry {
  id: number
  marketer_id: number
  client_id: number
  type: Type
  amount: number
  price: number
  marketer_name: string
  client_name: string
}

// Definición del tipo NonSensitiveInfoEntry para mantener la privacidad de los datos.
// Este tipo omite el id, marketer_id y client_id.
export type NonSensitiveInfoEntry = Omit<OperationEntry, 'id', 'marketer_id', 'client_id'>

export type newOperationEntry = Omit<OperationEntry, 'id', 'marketer_name', 'client_name'>
