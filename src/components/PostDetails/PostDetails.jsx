import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
const detailStyle = {
    border: '2px solid red',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px'
}

const PostDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    return (
        <div style={detailStyle}>
            <h2>{details.title}</h2>
            <p>{details.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;