import { DELETE_PRODUCT, PLUS_PRODUCT, MINUS_PRODUCT } from './constants'

export const plusProduct = (payload) => {
    return {
        type: PLUS_PRODUCT,
        payload
    }
}
export const minusProduct = (payload) => {
    return {
        type: MINUS_PRODUCT,
        payload
    }
}

export const deleteProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload
    }
}