import * as Types from './types'

const initialState = {
  cartItems: [],
  restaurant: '',
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
        restaurant: action.name,
      }
    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
    case Types.EMPTY_CART_ITEM:
      return {
        cartItems: action.payload,
      }

    default:
      return state
  }
}
