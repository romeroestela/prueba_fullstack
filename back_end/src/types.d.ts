export type Type = 'buy' | 'sell'

export interface OperationEntry{
    id: number,
    marketer_id: number,
    client_id: number,
    type: Type,
    amount: number,
    price: number,
    market_name: string,
    client_name: string
}