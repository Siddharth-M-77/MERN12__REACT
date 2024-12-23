import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className='p-10 flex items-center justify-center gap-10 text-black bg-zinc-200'>
                <NavLink to={'/'} className={(e) => e.isActive ? "text-indigo-600" : ""}>
                    Home
                </NavLink>
                <NavLink to={'/about'} className={(e) => e.isActive ? "text-indigo-600" : ""}>
                    About
                </NavLink>
                <NavLink to={'/contact'} className={(e) => e.isActive ? "text-indigo-600" : ""}>
                    Contact
                </NavLink>
                <NavLink to={'/services'} className={(e) => e.isActive ? "text-indigo-600" : ""}>
                    Services
                </NavLink>
                <NavLink to={'/products'} className={(e) => e.isActive ? "text-indigo-600" : ""}>
                    Products
                </NavLink>
            </nav>

        </div>
    )
}

export default Nav
