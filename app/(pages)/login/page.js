import InputField from "../../components/login/input-field/input-field"
import HeaderText from "../../components/login/header-text/header-text"
import SignupText from "../../components/login/signup-text/signup-text"
import ForgotPassword from "../../components/login/forgot-password/forgot"
import LoginButton from "../../components/login/login-button/login-button"
import Image from "../../components/login/image/image"
import Link from "next/link"
import "./login.css"

export default function Login() {
    return(
        <div id="login-page">

            <div id="login-field">
                <HeaderText/>
                <SignupText/>
                <InputField type={"text"} >Email</InputField>
                <InputField type={"password"} >Password</InputField>
                <Link href="/forgot-pass">
                    <ForgotPassword/>
                </Link>
                <LoginButton/>
            </div>

            <Image/>
            
        </div>
    )
}