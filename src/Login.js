import React ,{useState}from 'react'
import { Link , useHistory} from "react-router-dom"
import {auth} from './firebase'
import './Login.css'

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const signIn = (event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth=>{
            // if (auth)
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }
    const createAccount= (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            // 
            history.push('/')
        })
        .catch(e=>alert(e.message))

    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <form>
                    <h1>Sign In</h1>
                    <h5>Email</h5>
                    <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" name="login__password" id="" />
                    <button onClick={signIn} className="login__signIn">Login</button>
                    <p>By loging in, you agree our terms and conditions.<br/>
                    Don't have an account yet. Click below</p>
                    <button onClick={createAccount} className="login__createAccount">Create Your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
