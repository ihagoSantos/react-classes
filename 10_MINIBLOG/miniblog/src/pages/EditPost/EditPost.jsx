import styles from './EditPost.module.css'

import { useEffect, useState  } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'


export const EditPost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [formError, setFormError] = useState("")
    
    const { id } = useParams()
    const {document: post} = useFetchDocument("posts", id)
    const { updateDocument, response } = useUpdateDocument("posts")
    
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
        await updateDocument(id, data)
        
        // redirect to homepage
        navigate('/dashboard')
    }

    useEffect(() => {
        if(post) {
            setTitle(post.title)
            setImage(post.image)
            setBody(post.body)
            setTags(post.tagsArray.join(", "))
        }
    }, [post])
    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando Post: {post.title}</h2>
                    <p>Altere os dados do post como desejar</p>
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

                        <p className={styles.preview_title}>Preview da imagem atual</p>
                        <img src={post.image} alt={post.title} className={styles.image_preview}/>

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

                        {!response.loading && <button className="btn">Editar post!</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde...
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
                    </form>
                </>
            )}
        </div>
    )
}