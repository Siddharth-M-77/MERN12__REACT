import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams()

  return (
    <div className='flex items-center bg-white  text-black p-10 text-4xl  uppercase font-semibold mt-5 justify-center gap-5 flex-col flex-wrap'>
      {
        params.category
      }
    </div>
  )
}

export default ProductDetails
