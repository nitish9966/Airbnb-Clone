import { Link } from "react-router-dom"
function Register(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-lg mx-auto">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="password"/>
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">Already a member?
                    <Link to={'/login'} className="underline text">Login</Link>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Register