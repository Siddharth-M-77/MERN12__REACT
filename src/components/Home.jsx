import axios from '../utils/axiosConfig'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Store/Slice/ProductSlice'

const Home = () => {
  const { products } = useSelector(store => store.products)
  const dispatch = useDispatch()
  console.log(products)


  const addData = () => {
    const data = {
      id: 4,
      name: "mai hu",
      description: "mai hu na"
    }
    dispatch(setProducts(data))

  }

  return (
    <div>

      <div className='w-full flex flex-col min-h-screen gap-6 items-center justify-center mt-10'>
        <button onClick={addData} className='px-6 py-2 bg-black text-white'>Get Data From API</button>
        <h1 className='text-2xl'>Total Products : {products.length}</h1>
        {/* <div className='flex flex-col gap-5'>
          {
            products.map((p, i) => {
              return <Link key={p.id} className='p-2 bg-gray-500 text-white' to={`products/${p.id}`}>{p.title}</Link>
            })
          }
        </div> */}
      </div>

    </div>
  )
}

export default Home
