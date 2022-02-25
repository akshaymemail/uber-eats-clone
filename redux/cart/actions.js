import * as Types from './types'
export const addToCart = (item) => (dispatch) => {
  dispatch({ type: Types.ADD_TO_CART, payload: item })
}

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: Types.REMOVE_FROM_CART, payload: id })
}

export const emptyCartItems = () => (dispatch) => {
  dispatch({ type: Types.EMPTY_CART_ITEM, payload: [] })
}
