"use client"

import InputField from "@/app/components/signup/input-field/input-field"
import HeaderText from "@/app/components/signup/header-text/header-text"
import SignupButton from "@/app/components/signup/signup-button/signup-button"
import BackButton from "@/app/components/signup/back-button/back-button"
import Image from "@/app/components/signup/image/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import md5 from 'md5';
import "./signup.css"
import Verify from "@/app/components/email-verify/container/verify"
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation'

export default function SignUp() {

    const [name, setName] = useState(null); 
    const [email, setEmail] = useState(null); 
    const [password1, setPassword1] = useState(null); 
    const [password2, setPassword2] = useState(null); 
    const [hidden, setHidden] = useState([true,true,true,true])
    const [verification, setVerification] = useState([false,null]) // hidden boolean - verification code - token
    const [code, setCode] = useState(null)

    const cookies = useCookies();
    const router = useRouter()

    const checkInputs = (name, email, password1, password2) => {
        if(name == null || name.length == 0) {
            setHidden([false,true,true,true])
        }else if(email == null){
            setHidden([true,false,true,true])
        }else if(!email.includes("@")){
            setHidden([true,false,true,true])
        }else if(checkPassword1(password1)){
            setHidden([true,true,false,true])
        }else if(password2 == null || password1 != password2){
            setHidden([true,true,true,false])
        }else{
            var encyptedPassword = encryptPassword(password1)
            handleSignUp(name, email, encyptedPassword)
        }
    }

    const checkPassword1 = (password) => {
        if(password == null || password1.trim().length < 8){
            return true
        }else {
            return false
        }
    }

    const encryptPassword = (password) => {
        const hash = md5(password);
        return hash
    }

    const notifySuccess = () => toast.success("Success!", {
        position: "top-center",
        onClose: () => router.push('/dashboard')
      });

    const notifyError = () => toast.error("Error!", {
        position: "top-center"
      });

    const handleVerification = () => {
        if(code == verification[1]){
            setVerification([false,null])
            setCode(null)
            cookies.set('token', verification[2])
            notifySuccess()
            
        }else{
            notifyError()
        }
    }

    const handleSignUp = (name, email, password) => {
        fetch(`http://localhost:3004/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name,
                                        email: email,
                                    password: password })
            }).then(response => response.status == 201 ? setVerification([true,123456,'asdfgh']) : notifyError())
            // TODO: bu kısımda respontan gelen code u 123456 yerine yazıyoruz.
            // TODO: bu kısımda respontan gelen token ı asdfgh yerine yazıyoruz.
    }

    return(
        <>
            <div id="signup-page">

                <div id="signup-field">
                    <HeaderText/>
                    <InputField type={"text"} onChange={event => {setName(event.target.value); setHidden([true,true,true,true])}} errorMessage={"Please enter a name!"} isHidden={hidden[0]}>Name</InputField>
                    <InputField type={"text"} onChange={event => {setEmail(event.target.value); setHidden([true,true,true,true])}} errorMessage={"Please enter a valid email!"} isHidden={hidden[1]}>Email</InputField>
                    <InputField type={"password"} onChange={event => {setPassword1(event.target.value); setHidden([true,true,true,true])}} errorMessage={"Please enter minimum 8 characters!"} isHidden={hidden[2]}>Password</InputField>
                    <InputField type={"password"} onChange={event => {setPassword2(event.target.value); setHidden([true,true,true,true])}} errorMessage={"Please enter the same password!"} isHidden={hidden[3]}>Confirm password</InputField>
                    <SignupButton handleClick={() => checkInputs(name, email, password1, password2)}/>
                    <BackButton/>
                    
                </div>

                <Image/>

                <ToastContainer/>

            </div>

            {verification[0] ? <Verify email={email} handleVerification={handleVerification} handleCodeInput={event => setCode(event.target.value)}/> : null}
        </>
        
    )
}