// import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.address.city}</p>
        </div>
    );
};

export default UserDetails;