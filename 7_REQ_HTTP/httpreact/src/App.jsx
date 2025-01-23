import './App.css'
import { useState, useEffect } from 'react'

// 4 - custom hook
import { useFetch } from './hooks/useFetch'

function App() {
  /**
   * useEffect faz com que determinada ação seja executada apenas uma vez.
   * Só vai ser executado caso a dependência passada para ele mude
   * Ele está presente na maioria das vezes em requisições assíncrona
   */
  const url = "http://localhost:3000/products"
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 4 - custom hook
  const { data:items, httpConfig, loading, error } = useFetch(url)
  
  // 1 - Resgatando dados
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
  //   fetchData()
  // }, [])

  // 2 - adicionar produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name, price
    }
    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // const addedProduct = await res.json()
    // // 3 - Carregamento dinâmico
    // setProducts((previousState) => [...previousState, addedProduct])

    // 5 - refatorando post
    httpConfig(product, 'POST')

    setName("")
    setPrice("")

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items?.map(product=> (
          <li key={product.id}>{product.name} - R$ {product.price} - <button onClick={() => (httpConfig(null, 'DELETE', product.id))}>Excluir</button></li>
        )) }
      </ul>
      )}
      
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço:</span>
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          
           {/* 7 - state de loading no post  */}
           { loading ? 
            <input type="submit" value="Aguarde" disabled/> :
            <input type="submit" value="Criar"/>
          } 
          
        </form>
      </div>
    </div>
  )
}

export default App
