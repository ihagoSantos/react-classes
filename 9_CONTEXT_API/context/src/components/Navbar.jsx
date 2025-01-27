import './Navbar.css'

import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/perfil">Perfil</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}