import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Products/Products.css'

const Products = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error , setError] = useState(null)

  useEffect( () => {

    const fetchProducts = async () => {
     
       try{
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
        setLoading(false)
      }

      catch(err){
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProducts()
     

  },[])

  if (loading){
    return (
      <div className="loading-wrapper">
        <div className="spinner">
         
        </div>

         <p>Loading Products...</p>
      </div>
    )
  }

  if (error){
    return <p>Error: {error}</p>
  }

  return (
    <div className='products-page'>
      <h1 className="product-heading">Availabe Products</h1>

      <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src= {product.image} alt= {product.title} className='product-img'  loading="lazy"/>
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>
              <Link className='btn' to= {`/products/${product.id}`}>View Product</Link>
            </div>
          )

          )}
      </div>
    </div>
  )
}

export default Products