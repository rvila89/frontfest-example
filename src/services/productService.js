export const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=5')
  return response.json()
}

export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  )
}
