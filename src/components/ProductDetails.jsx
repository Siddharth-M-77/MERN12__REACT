import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1 className='text-5xl font-bold text-center mt-10'>  This is Product Details Page...</h1>
    </div>
  )
}

export default ProductDetails
