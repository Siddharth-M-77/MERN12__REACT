import React from 'react'
import { NavLink } from 'react-router-dom'

const FetchData = () => {
    return (
        <div className='w-full h-full text-black'>

            <div className='p-5 bg-white shadow-lg flex items-center justify-center gap-10'>
                <NavLink className={(e) => e.isActive ? "text-indigo-600" : ""} to='/'>
                    Home

                </NavLink>
                <NavLink className={(e) => e.isActive ? "text-indigo-600" : ""} to='/Products'>
                    Products

                </NavLink>

                <NavLink className={(e) => e.isActive ? "text-indigo-600" : ""} to='/About'>
                    About

                </NavLink>
            </div>


        </div>
    )
}

export default FetchData
