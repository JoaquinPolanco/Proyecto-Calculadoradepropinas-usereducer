import { MenuItem, OrderItem } from "../types";

export type OrderActions =
    { type: 'add-item', payLoad: { item: MenuItem } } |
    { type: 'remove-item', payLoad: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payLoad: { value: number } }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions

) => {
    if (action.type === 'add-item') {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payLoad.item.id)
        let order : OrderItem[] = []
        if (itemExist) {
            order = state.order.map(orderItem => orderItem.id === action.payLoad.item.id ? {
                ...orderItem, quantity:
                    orderItem.quantity + 1
            } :
                orderItem) 
        } else {
            const newItem : OrderItem = { ...action.payLoad.item, quantity: 1 }
            order = [...state.order, newItem]
        }
        return {
            ...state, 
            order
        }
    }
    if (action.type === 'remove-item') {
        const order = state.order.filter(item => item.id !== action.payLoad.id)
        return {
            ...state, 
            order
        }
    }
    if (action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip: 0
        }
    }
    if (action.type === 'add-tip') {
        const tip = action.payLoad.value
        return {
            ...state,
            tip
        }
    }
    return state

}