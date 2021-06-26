import React, { useState, useEffect } from 'react';
import firebaseAuth from '../config/firebase';


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {

            let response = await firebaseAuth.signInWithEmailAndPassword(
                username,
                password
            );
            if (response.user.uid) {

                setUser(response.user.uid);
                setMessage("");
            }
        } catch (err) {
            setMessage(err.message);
        }
    }

    const handleLogout = () => {
        firebaseAuth.signOut();
        setUser(null);
    }


    useEffect( () => {
        firebaseAuth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user.uid);
            }
        });
    } , [] );
    return (
        <div>
            {user ? <div>
                <h1>Welcome to HomePage, id is {user}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div> : (
                <>
                    <h1> FireBase Login</h1>
                    <div>
                        Username <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        password <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button onClick={handleLogin}>LOGIN</button>
                    <h2 style={{ color: "red" }}>{message}</h2>

                </>
            )
            }
        </div>
    );
}


export default LoginPage;