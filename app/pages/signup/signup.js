import InputField from "@/app/components/signup/input-field/input-field"
import HeaderText from "@/app/components/signup/header-text/header-text"
import SignupButton from "@/app/components/signup/signup-button/signup-button"
import BackButton from "@/app/components/signup/back-button/back-button"
import Image from "@/app/components/signup/image/image"
import "./signup.css"

export default function SignUp() {
    return(
        <div id="signup-page">

            <div id="signup-field">
                <HeaderText/>
                <InputField type={"text"} >Name</InputField>
                <InputField type={"text"} >Email</InputField>
                <InputField type={"password"} >Password</InputField>
                <InputField type={"password"} >Confirm password</InputField>
                <SignupButton/>
                <BackButton/>
            </div>

            <Image/>
            
        </div>
    )
}