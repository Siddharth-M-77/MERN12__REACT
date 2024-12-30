import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const getAllProducts = async () => {
    try {

      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data)
      setProducts(response.data)

    } catch (error) {
      console.log(error.message)
    }

  }
  const submitHandler = () => {
    navigate("/products")

  }
  return (
    <div>
      <form className='w-full min-h-screen flex flex-col items-center gap-5 justify-center' onSubmit={submitHandler}>
        <input type='email' placeholder="enter email" className="w-[60%] mt-5 px-3 py-2" />
        <button className="px-6 py-2 bg-indigo-600">Submit</button>
      </form>
      <div className='w-full flex flex-col gap-6 items-center justify-center mt-10'>
        <button onClick={getAllProducts} className='px-6 py-2 bg-black text-white'>Get Data From API</button>
        <h1 className='text-2xl'>Total Products : {products.length}</h1>
        <div className='flex flex-col gap-5'>
          {
            products.map((p, i) => {
              return <Link key={p.id} className='p-2 bg-gray-500 text-white' to={`products/${p.title}`}>{p.title}</Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
