import { OperationEntry, NonSensitiveInfoDiaryEntry } from '../types'
import operationData from '../operations.json'

const operations: OperationEntry[] = operationData as OperationEntry[]

export const getEntries = (): OperationEntry[] => operations

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return operations.map(({type, amount, price, market_name, client_name}) => {
        type
        amount
        price
        market_name
        client_name
    })
}

export const addOperation = (): undefined => undefined
