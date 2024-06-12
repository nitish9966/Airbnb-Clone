import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        try{
        await axios.post('/login',{email,password});
        alert('Login successful');
        }
        catch(e){
            alert('Login failed');
        }
        navigate('/')
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-lg mx-auto" onSubmit={handleLogin}>
                <input type="email" 
                placeholder="your@email.com" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" 
                placeholder="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">Don&apos;t have an account yet?&nbsp;
                    <b><Link to={'/register'} className="underline text">Register Now</Link></b>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginPage