export interface Operation{
    id: number,
    marketer_id: number,
    client_id: number,
    type: 'buy' | 'sell',
    amount: number,
    price: number,
    marketer_name: string,
    client_name: string
}

export type OperationResponseFromApi = Array<{
    id: number,
    marketer_id: number,
    client_id: number,
    type: 'buy' | 'sell',
    amount: number,
    price: number,
    marketer_name: string,
    client_name: string
}>