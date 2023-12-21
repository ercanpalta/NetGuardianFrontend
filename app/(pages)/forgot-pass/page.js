import InputField from "@/app/components/forgot-pass/input-field/input-field"
import HeaderText from "@/app/components/forgot-pass/header-text/header-text"
import RequestButton from "@/app/components/forgot-pass/request-button/request-button"
import BackButton from "@/app/components/forgot-pass/back-button/back-button"
import Image from "@/app/components/forgot-pass/image/image"
import Link from "next/link"
import "./forgot-pass.css"

export default function ForgotPass() {
    return(
        <div id="forgot-pass-page">

            <div id="forgot-pass-field">
                <HeaderText/>
                <InputField type={"text"} >Email</InputField>
                <RequestButton/>
                <BackButton/>
            </div>

            <Image/>
            
        </div>
    )
}