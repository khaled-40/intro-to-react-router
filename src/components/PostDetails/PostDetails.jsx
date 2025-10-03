import React from 'react';
import { useLoaderData } from 'react-router';
const detailStyle = {
    border: '2px solid red',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px'
}

const PostDetails = () => {
    const details = useLoaderData();
    return (
        <div style={detailStyle}>
            <h2>{details.title}</h2>
            <p>{details.body}</p>
        </div>
    );
};

export default PostDetails;