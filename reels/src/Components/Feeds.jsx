import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Feeds = (props) => {
    const { signout } = useContext(AuthContext);
    const handleSignout = async ()=>{
        await signout();
        props.history.push("/login");
    }
    return (
        <>
            <h1>Feeds</h1>
            <button onClick={handleSignout}>Signout</button>
        </>
    );
}

export default Feeds;