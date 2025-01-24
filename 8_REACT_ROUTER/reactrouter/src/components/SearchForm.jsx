import './SearchForm.css'
import { useNavigate } from 'react-router-dom' // 10 - search - O hook useNavigate é utilizado no React Router para programaticamente navegar entre diferentes rotas em uma aplicação React. Ele retorna uma função que pode ser chamada para mudar a rota atual.
import { useState } from 'react'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?name=${query}`)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <input type="submit" value="Buscar"/>
        </form>
    )
}

export default SearchForm