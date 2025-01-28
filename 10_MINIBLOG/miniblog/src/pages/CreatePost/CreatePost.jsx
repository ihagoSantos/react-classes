import styles from './CreatePost.module.css'

import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

import { useInsertDocument } from '../../hooks/useInsertDocument'
export const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [formError, setFormError] = useState("")
    const { insertDocument, response } = useInsertDocument("posts")
    
    const navigate = useNavigate()
    const { user } = useAuthValue()
    
    const validateUrl = (url) => {
        try {
            new URL(url)
        } catch (error) {
            setFormError("A imagem precisa ser uma url válida.")
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError("")
        // validar image URL
        validateUrl(image)
        // criar o array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
        // checar todos os valores
        if(!title || !image || !tags || !body) {
            setFormError("Preencha todos os dados")
            return
        }

        const data = {
            title, 
            image,
            body,
            tagsArray, 
            uid: user.uid,
            createdBy: user.displayName
        }
        await insertDocument(data)
        
        // redirect to homepage
        navigate('/')
    }

    return (
        <div className={styles.create_post}>
            <h2>Criar Post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input 
                        type="text" 
                        name="title" 
                        required 
                        placeholder="Pense num bom título..." 
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title}
                    />
                </label>

                <label>
                    <span>URL da imagem</span>
                    <input 
                        type="text" 
                        name="image" 
                        required 
                        placeholder="Insira uma imagem que representa o seu post" 
                        onChange={(e) => setImage(e.target.value)} 
                        value={image}
                    />
                </label>

                <label>
                    <span>Conteúdo</span>
                    <textarea 
                        name="body" 
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Insira o conteúdo do post'
                        value={body}
                        required
                    ></textarea>
                </label>

                <label>
                    <span>Tags</span>
                    <input 
                        type="text" 
                        name="tags" 
                        required 
                        placeholder="Insira as tags separadas por vírgula" 
                        onChange={(e) => setTags(e.target.value)} 
                        value={tags}
                    />
                </label>

                {!response.loading && <button className="btn">Criar post!</button>}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    )
}