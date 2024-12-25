import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div >
      <h1 className='text-2xl font-bold mt-3 text-center'>Dynamic routing</h1>
      <div className='p-10 flex items-center justify-center gap-6 bg-orange-300 text-black'>
        <Link to={'/products/gym'} className='p-2 text-semibold'>Gym Accesseries</Link>
        <Link to={'/products/protines'} className='p-2 text-semibold'  >Protines</Link>
        <Link to={'/products/products1'} className='p-2 text-semibold' >Products1</Link>
        <Link to={'/products/products2'} className='p-2 text-semibold'>Products2</Link>
        <Link to={'/products/product3'} className='p-2 text-semibold'>Products3</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product
