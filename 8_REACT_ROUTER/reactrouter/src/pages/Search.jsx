import  { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/products?" + searchParams
    const { data:items, loading, error } = useFetch(url)
    return (
        <div>
            <h2>Resultados Disponíveis</h2>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}

            <ul className='products'>
                {items && (
                    items.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>R$ {item.price}</p>
                        </li>
                    ))
                )}

            </ul>
        </div>
    )
}

export default Search