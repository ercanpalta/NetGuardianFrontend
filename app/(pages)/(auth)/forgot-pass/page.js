"use client"

import InputField from "@/app/components/forgot-pass/input-field/input-field"
import HeaderText from "@/app/components/forgot-pass/header-text/header-text"
import RequestButton from "@/app/components/forgot-pass/request-button/request-button"
import BackButton from "@/app/components/forgot-pass/back-button/back-button"
import Image from "@/app/components/forgot-pass/image/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { useState } from "react"
import "./forgot-pass.css"

export default function ForgotPass() {

    const [email, setEmail] = useState(null);
    const [hidden, setHidden] = useState(true)

    const router = useRouter()

    const checkInput = (email) => {
        if(email == null || email.length == 0) {
            setHidden(false)
        }else if(!email.includes("@")){
            setHidden(false)
        }else{
            handleRequest(email)
        }
    }

    const handleRequest = (email) => {
        fetch(`http://localhost:3000/forgot-pass/api?email=${email}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }).then(response => response.status == 200 ? notifyInfo() : notifyServerError())
            // TODO: bu kısımda respontan gelen token ı asdfgh yerine yazıyoruz.
    }

    const notifyInfo = () => toast.info("We sent your new password to your email address!", {
        position: "top-center",
        autoClose: false,
        theme: "dark",
        onClose: () => router.push('/login')
      });


    return(
        <div id="forgot-pass-page">

            <div id="forgot-pass-field">
                <HeaderText/>
                <InputField type={"text"} onChange={event => {setEmail(event.target.value); setHidden(true)}} errorMessage={"Please enter a valid email!"} isHidden={hidden}>Email</InputField>
                <RequestButton handleClick={() => checkInput(email)}/>
                <BackButton/>
            </div>

            <Image/>

            <ToastContainer/>
            
        </div>
    )
}