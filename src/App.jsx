import { Navbar } from './components/Navbar'
import { useItemsCart } from './hooks/useItemsCart'
import { CartRoutes } from './routes/CartRoutes'

export const App = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart()

  return (
    <>
      <Navbar />
      <div className='container my-4'>
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCart={handlerDeleteProductCart}
        />
      </div>
    </>
  )
}
