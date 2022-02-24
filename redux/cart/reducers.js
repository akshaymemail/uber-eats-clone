import * as Types from './types'

const initialState = {
  cartItems: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
    case Types.EMPTY_CART_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      }

    default:
      return state
  }
}
