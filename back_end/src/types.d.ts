export type Type = 'buy' | 'sell'

export interface OperationEntry {
  id: number
  marketer_id: number
  client_id: number
  type: Type
  amount: number
  price: number
  market_name: string
  client_name: string
}

// Definición del tipo NonSensitiveInfoDiaryEntry para mantner la privacidad de los datos.
export type NonSensitiveInfoDiaryEntry = Omit<OperationEntry, 'id', 'marketer_id', 'client_id'>
