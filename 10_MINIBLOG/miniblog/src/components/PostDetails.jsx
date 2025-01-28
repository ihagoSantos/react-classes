import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PostDetails.module.css';

export const PostDetails = ({ post }) => {
    return (
        <div className={styles.post_detail}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className={styles.createdby}>{post.createdBy || 'Autor Desconhecido'}</p>
            <p>{post.createdAt}</p>
            <div className={styles.tags}>
                {post.tagsArray.map((tag) => ( 
                    <p key={tag}><span>#</span>{tag}</p> 
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>
        </div>
    )
}

PostDetails.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        createdAt: PropTypes.string,
        tagsArray: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string
    })
};