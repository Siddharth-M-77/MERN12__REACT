import axios from '../utils/axiosConfig'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const getAllProducts = async () => {
    try {

      const response = await axios.get('/products')
      setProducts(response.data)

    } catch (error) {
      console.log(error.message)
    }

  }
  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
    
      <div className='w-full flex flex-col min-h-screen gap-6 items-center justify-center mt-10'>
        <button onClick={getAllProducts} className='px-6 py-2 bg-black text-white'>Get Data From API</button>
        <h1 className='text-2xl'>Total Products : {products.length}</h1>
        <div className='flex flex-col gap-5'>
          {
            products.map((p, i) => {
              return <Link key={p.id} className='p-2 bg-gray-500 text-white' to={`products/${p.id}`}>{p.title}</Link>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Home
