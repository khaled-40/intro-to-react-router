import React from 'react';
import { Link, useNavigate } from 'react-router';


const postStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px'
}

const Post = ({ post }) => {
    const navigate = useNavigate();
    const handlePostButton = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <div style={postStyle}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.id}`}><button>See Details</button></Link>

            <button onClick={handlePostButton}>Details of: {post.id}</button>
        </div>
    );
};

export default Post;