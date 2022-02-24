export const isExistInCart = (cartItems, id) => {
  return Boolean(cartItems.find((item) => item.id === id))
}
