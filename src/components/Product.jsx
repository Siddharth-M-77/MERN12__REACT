import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div >
      <h1 className='text-2xl font-bold mt-3 text-center'>Dynamic routing</h1>
      <div className='p-10 flex items-center justify-center gap-6 bg-orange-300 text-black'>
        <Link to={'/gym'} className='p-2 text-semibold'>Gym Accesseries</Link>
        <Link to={'/protines'} className='p-2 text-semibold'  >Protines</Link>
        <Link to={'/products/1'} className='p-2 text-semibold' >Products1</Link>
        <Link to={'/products/2'} className='p-2 text-semibold'>Products2</Link>
        <Link to={'/products/3'} className='p-2 text-semibold'>Products3</Link>
      </div>
    </div>
  )
}

export default Product
