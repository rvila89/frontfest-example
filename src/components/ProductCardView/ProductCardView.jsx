import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import './ProductCardView.css'

const ProductCardView = ({ handler, id, name, title, price, image }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const navigate = useNavigate()

  const onAddProduct = (product) => {
    handler(product)
    navigate('/cart')
  }

  return (
    <>
      <div className='card h-100'>
        <div className='card-body w-100 d-flex flex-column image-container'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{price} €</p>
          <img
            src={image}
            alt={title}
            className='d-block p-2 mx-auto w-50 card-image'
            onLoad={() => setImgLoaded(true)}
            height='275'
          />
          {!imgLoaded && (
            <div className='image-container-overlay'>
              <div className='spinner-border' role='status' />
            </div>
          )}

          <button
            className='btn btn-primary mt-auto'
            onClick={() => onAddProduct({ id, name, title, price, image })}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCardView

ProductCardView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  handler: PropTypes.func,
}
