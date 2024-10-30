import { OperationEntry } from '../types'
import operationData from '../operations.json'

const operations: OperationEntry[] = operationData as OperationEntry[]

export const getEntries = () => operations

export const addOperation = () => null