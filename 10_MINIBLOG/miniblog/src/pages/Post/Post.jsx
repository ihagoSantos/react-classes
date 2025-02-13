import { useFetchDocument } from '../../hooks/useFetchDocument'
import styles from './Post.module.css'

// hooks
import { useParams } from 'react-router-dom'

export const Post = () => {
    const {id} = useParams()
    const {document: post, error, loading} = useFetchDocument('posts', id)

    return (
        <div className={styles.post_container}>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata sobre</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag, index) => ([
                            <p key={index}><span>#</span>{tag}</p>
                        ]))}
                    </div>
                </>

            )}
        </div>
    )
}