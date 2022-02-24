export const isExistInCart = (cartItems, id) => {
  return Boolean(cartItems.find((item) => item.id === id))
}

export const getTotalCartPrice = (cartItems) => {
  const priceArray = cartItems.map((item) => Number(item.price))
  return priceArray.reduce((previous, current) => previous + current, 0)
}

export const getTotalCartItem = (cartItems) => cartItems.length
