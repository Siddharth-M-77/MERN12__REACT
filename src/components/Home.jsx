import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const submitHandler = () => {
    navigate("/products")
    i
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='email' placeholder="enter email" className="mt-5" />
        <button className="px-6 py-2 bg-indigo-600">Submit</button>
      </form>
    </div>
  )
}

export default Home
