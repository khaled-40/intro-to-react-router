import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { name, email, phone,id } =user;
    const userStyle = {
        border: '2px solid yellow',
        margin: "10px" ,
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;