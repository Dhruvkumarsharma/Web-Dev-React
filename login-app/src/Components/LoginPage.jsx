import React, { useState, useEffect } from 'react';


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>FireBase Login</h1>
            <div>
                <div>
                    UserName{" "}
                    <input value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    Password{" "}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <button>Login</button>
            </div>

        </div>
    );
}

export default LoginPage;