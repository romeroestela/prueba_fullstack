import { newOperationEntry } from "./types"
import { Type } from "./enums"

const parseType = (typeFromRequest: any): Type => {
    if (!isString(typeFromRequest) || !isType(typeFromRequest) ) {
        throw new Error('Tipo no válido o no especificado')
    }

    return typeFromRequest as Type
}

const parseMarketerId = (marketerIdRequest: any): number => {
    if (!isNumber(marketerIdRequest)) {
        throw new Error('Marketer ID no válido o no especificado')
    }

    return marketerIdRequest
}

const parseClientId = (clientIdRequest: any): number => {
    if (!isNumber(clientIdRequest)) {
        throw new Error('Client ID no válido o no especificado')
    }

    return clientIdRequest
}

const parseAmount = (amountRequest: any): number => {
    if (!isNumber(amountRequest)) {
        throw new Error('Amount no válido o no especificado')
    }

    return amountRequest
}

const parsePrice = (priceRequest: any): number => {
    if (!isNumber(priceRequest)) {
        throw new Error('Price no válido o no especificado')
    }

    return priceRequest
}

const isString = (string: string): boolean => {
    return typeof string == 'string'
}

const isNumber = (number: number): boolean => {
    return typeof number === 'number' && !isNaN(number)
} 

const isType = (param: any): boolean => {
    return Object.values(Type).includes(param)
}

const toNewOperationEntry = (object: any): newOperationEntry => {
    const newEntry: newOperationEntry = {
        type: parseType(object.type),
        marketer_id: parseMarketerId(object.marketer_id),
        client_id: parseClientId(object.client_id),
        amount: parseAmount(object.amount),
        price: parsePrice(object.price)
    }

    return newEntry
}

export default toNewOperationEntry