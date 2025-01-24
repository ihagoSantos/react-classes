import './Product.css'

import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {
    //4 - rota dinamica
    const {id} = useParams() // hook para pegar parâmetros da rota
    const url = `http://localhost:3000/products/${id}`
    // 5 - carregamento dado individual
    const { data:product, loading, error } = useFetch(url)
    
    return (
        <>
            <p>ID do produto: {id}</p>
            { error && <p>{error}</p> }
            { loading && <p>Carregando...</p> }
            { product && <div>
                <h2>{product.name}</h2>
                <p>R$ {product.price}</p>
                {/* 6 - Nested route */}
                <Link to={`/products/${id}/info`}>Mais informações</Link>
            </div> }
        </>
    )
}

export default Product