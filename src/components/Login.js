import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
const Login = () => {
    const [username, setUsername] = useState('');
    const { user, login } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
          setUsername(''); 
        }
      }, [user]);

    const handleLogin = () => {
        login(username);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin} className='userbtn'>Login</button>
        </div>
    );
};
export default Login; 