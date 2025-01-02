import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://fakestoreapi.com/products')
        console.log(response)
        setProducts(response.data)
      } catch (error) {
        console.log(error);

      }
    }
    fetchData()
  }, [])
  return (
    <div >
      <div className='w-full flex flex-col min-h-screen gap-6 items-center justify-center mt-10'>
        <h1 className='text-2xl'>Total Products : {products.length}</h1>
        <div className='grid grid-cols-6 gap-5 items-center justify-center'>
          {
            products.map((p, i) => {
              return <Link key={p.id} className='p-2 flex  flex-col items-center justify-around h-96 bg-gray-500 text-white' to={`products/${p.id}`}>{p.title}
                <img className='w-72 h-fit' src={p.image} alt="" />
              </Link>
            })
          }
        </div>
      </div>
      <Outlet />


    </div>
  )
}

export default Product
