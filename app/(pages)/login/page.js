"use client"

import InputField from "../../components/login/input-field/input-field"
import HeaderText from "../../components/login/header-text/header-text"
import SignupText from "../../components/login/signup-text/signup-text"
import ForgotPassword from "../../components/login/forgot-password/forgot"
import LoginButton from "../../components/login/login-button/login-button"
import Image from "../../components/login/image/image"
import Link from "next/link"
import { useState } from "react"
import "./login.css"

export default function Login() {

    const [email, setEmail] = useState(null); 
    const [password, setPassword] = useState(null);
    const [hidden, setHidden] = useState([true,true])

    const checkInputs = (email, password) => {
        if(email == null || email.length == 0) {
            setHidden([false,true])
        }else if(!email.includes("@")){
            setHidden([false,true])
        }else if(checkPassword(password)){
            setHidden([true,false])
        }
    }

    const checkPassword = (password) => {
        if(password == null || password.trim().length < 8){
            return true
        }else {
            return false
        }
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
            
        </div>
    )
}