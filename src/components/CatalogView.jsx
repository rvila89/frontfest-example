import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/productService'
import { ProductCardView } from './ProductCardView'

const CatalogView = ({ handler }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className='row'>
        {products.length === 0 ? (
          <div className='spinner-border mx-auto mt-3' role='status' />
        ) : (
          products.map((prod) => (
            <div className='col-4 my-2' key={prod.id}>
              <ProductCardView
                handler={handler}
                id={prod.id}
                name={prod.name}
                title={prod.title}
                price={prod.price}
                image={prod.image}
              />
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default React.memo(CatalogView)
