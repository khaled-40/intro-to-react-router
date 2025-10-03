import React from 'react';
import { Link } from 'react-router';

const postStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px'
}

const Post = ({post}) => {
    return (
        <div style={postStyle}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.id}`}><button>See Details</button></Link>
        </div>
    );
};

export default Post;