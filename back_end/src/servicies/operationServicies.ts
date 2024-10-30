import { OperationEntry, NonSensitiveInfoDiaryEntry } from '../types'
import operationData from '../operations.json'

const operations: OperationEntry[] = operationData as OperationEntry[]

export const getEntries = (): OperationEntry[] => operations

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => operations

export const addOperation = (): undefined => undefined
