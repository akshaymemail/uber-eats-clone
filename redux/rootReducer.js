import { combineReducers } from 'redux'
import { cartReducer } from './cart/reducers'

const rootReducer = combineReducers({
  // reducers go here
  cart: cartReducer,
})

export default rootReducer
