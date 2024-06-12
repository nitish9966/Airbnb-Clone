import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:4000'; // Replace with your backend server URL

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()

    async function registerUser(e) {
        e.preventDefault();
        
        // Log the form data to verify it is being captured correctly
        console.log("Form Data:", { name, email, password });

        try {
            const response = await axios.post('/register', {
                name,
                email,
                password,
            });

            if (response.status === 200) {
                alert('Registration successful. Now you can log in');
            } else {
                alert('Registration failed. Please try again later');
            }
        } catch (error) {
            alert(`Registration failed: ${error.response ? error.response.data.message : 'Please try again later'}`);
        }
        navigate('/login')
    }

    // function handleValues(){
    //     document.getElementById('name').value=''
    //     document.getElementById('email').value=''
    //     document.getElementById('password').value=''

    // }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-lg mx-auto" onSubmit={registerUser}>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        id="email"
                        type="email" 
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        id="password"
                        type="password" 
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?&nbsp;
                        <b><Link to={'/login'} className="underline text">Login</Link></b>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
