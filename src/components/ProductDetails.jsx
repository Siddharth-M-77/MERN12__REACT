import axios from '../utils/axiosConfig'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState('')
  const params = useParams()
  const { id } = params

  const getSingleProduct = async () => {
    const response = await axios.get(`/products/${id}`)
    setSingleProduct(response.data)
  }

  useEffect(() => {
    getSingleProduct()
  }, [id])

  return (
    <div className='flex items-center min-h-screen bg-gray-600  text-black p-10 text-4xl  uppercase font-semibold mt-5 justify-start gap-5 flex-col flex-wrap'>

      <div className='p-4  bg-white shadow-xl rounded-3xl flex items-center justify-center flex-col'>
        <img className='h-52 w-52 object-cover ' src={singleProduct.image} alt="" />
        <h4 className='text-lg mt-4 w-52 mb-4'>{singleProduct.title}</h4>
        <p className='text-sm w-96 '>{
          singleProduct.description.length > 20 ? singleProduct.description.slice(1, 100) :
            singleProduct?.description}</p>
      </div>
    </div>
  )
}

export default ProductDetails
