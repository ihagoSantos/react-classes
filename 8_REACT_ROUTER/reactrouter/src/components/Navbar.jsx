import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
            {/* <NavLink to="/" className={({isActive}) => {isActive ? 'esta-ativo' : 'nao-esta-ativo'}}>Home</NavLink> */}
            <NavLink to="/">Home</NavLink> {/** Por padrão o NavLink já manipula o atributo 'isActive' */}
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Navbar