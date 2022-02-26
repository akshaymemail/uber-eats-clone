import * as Types from './types'
export const addToCart = (item, name) => (dispatch) => {
  dispatch({ type: Types.ADD_TO_CART, item, name })
}

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: Types.REMOVE_FROM_CART, payload: id })
}

export const emptyCartItems = () => (dispatch) => {
  dispatch({ type: Types.EMPTY_CART_ITEM, payload: [] })
}
