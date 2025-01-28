import styles from './Home.module.css';

// hooks
import {useNavigate, Link} from 'react-router-dom'
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

// components
import { PostDetails } from '../../components/PostDetails';
export const Home = () => {

    const [query, setQuery] = useState("")
    const {documents: posts, error, loading} = useFetchDocuments("posts", query)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(query) {
            navigate(`/search?q=${query}`)
        }
    }
    return (
        <div className={styles.home}>
            <h1>Veja os nossos posts mais recentes</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input type="text" placeholder="Ou busque por tags..." 
                    onChange={(e) => setQuery(e.target.value)} value={query} 
                />
                <button className="btn btn-dark">Pesquisar</button>
            </form>

            {loading && (<p>Carregando posts...</p>)}
            {error && (<p>{error}</p>)}

            <div>
                {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
            </div>
            
            {(posts && posts.length === 0) && (
                <div className="noposts">
                    <p>Não foram encontrados posts</p>
                    <Link to="/posts/criar" className='btn'>Criar primeiro post</Link>
                </div>
            )}
        </div>
    )
}