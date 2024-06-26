"use client"

import InputField from "../../../components/login/input-field/input-field"
import HeaderText from "../../../components/login/header-text/header-text"
import SignupText from "../../../components/login/signup-text/signup-text"
import ForgotPassword from "../../../components/login/forgot-password/forgot"
import LoginButton from "../../../components/login/login-button/login-button"
import Image from "../../../components/login/image/image"
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import md5 from 'md5';
import { useState } from "react"
import "./login.css"

export default function Login() {

    const [email, setEmail] = useState(null); 
    const [password, setPassword] = useState(null);
    const [hidden, setHidden] = useState([true,true])

    const cookies = useCookies();
    const router = useRouter()

    const checkInputs = (email, password) => {
        if(email == null || email.length == 0) {
            setHidden([false,true])
        }else if(!email.includes("@")){
            setHidden([false,true])
        }else if(checkPassword(password)){
            setHidden([true,false])
        }else{
            var encryptedPassword = encryptPassword(password)
            handleLogin(email, encryptedPassword)
        }
    }

    const checkPassword = (password) => {
        if(password == null || password.trim().length < 8){
            return true
        }else {
            return false
        }
    }

    const encryptPassword = (password) => {
        const hash = md5(password);
        return hash
    }

    const notifySuccess = () => toast.success("Logging in!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
        onClose: () => router.push('/dashboard')
      });

    const notifyAuthError = () => toast.error("Email or password is not correct!", {
        position: "top-center"
      });

    const notifyServerError = () => toast.error("Error!", {
        position: "top-center"
    });

    const login = (token) => {
        cookies.set('token', token)
        notifySuccess()
    }

    const handleLogin = (email, password) => {
        fetch(`http://localhost:3000/login/api?email=${email}&password=${password}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }).then(
                response => {
                    const statusCode = response.status;
                    
                    if(statusCode == 200) {
                        return response.json();
                    }else{
                        notifyAuthError();
                        return Promise.reject('Request failed or returned non-200 status code');
                    } 

            }).then(json => login(json.id))
            // TODO: bu kısımda respontan gelen token ı asdfgh yerine yazıyoruz.
    }

    return(
        <div id="login-page">

            <div id="login-field">
                <HeaderText/>
                <SignupText/>
                <InputField type={"text"} onChange={event => {setEmail(event.target.value); setHidden([true,true])}} errorMessage={"Please enter a valid email!"} isHidden={hidden[0]}>Email</InputField>
                <InputField type={"password"} onChange={event => {setPassword(event.target.value); setHidden([true,true])}} errorMessage={"Please enter minimum 8 characters!"} isHidden={hidden[1]}>Password</InputField>
                <Link href="/forgot-pass">
                    <ForgotPassword/>
                </Link>
                <LoginButton handleClick={() => checkInputs(email, password)}/>
            </div>

            <Image/>

            <ToastContainer/>
            
        </div>
    )
}