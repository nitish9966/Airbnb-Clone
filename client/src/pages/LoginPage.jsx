import { Link } from "react-router-dom"
function LoginPage(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-lg mx-auto">
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="password"/>
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