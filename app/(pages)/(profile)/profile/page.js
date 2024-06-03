"use client"

import UserInfo from "@/app/components/profile/user-info/user-info"
import ChangePassword from "@/app/components/profile/change-pass/change-pass"
import "./profile.css"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import InputField from "@/app/components/profile/input-field/input-field"
import SaveButton from "@/app/components/profile/save-button/save-button"
import ChangePassButton from "@/app/components/profile/change-pass-button/change-pass-button"



export default function Profile() {

    const [name, setName] = useState(null); 
    const [email, setEmail] = useState(null);
    const [password0, setPassword0] = useState(null); 
    const [password1, setPassword1] = useState(null); 
    const [password2, setPassword2] = useState(null); 
    const [hidden, setHidden] = useState([true,true,true,true])

    const router = useRouter()
    
    return(
        <>  
            <div className="profile-header">
                <img className="back-button" src="../../icons/back.svg" onClick={() => router.back()}/>
                <p className="header-text">Profile</p>
            </div>
            

            <div className="containers">

                <UserInfo>
                    <img className="profile-pic" src="../../icons/profilepic.svg"/>
                    <InputField type={"text"} value={"Netguard Project"}   onChange={event => {setName(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter a name!"} isHidden={hidden[0]}>Name</InputField>
                    <InputField type={"text"} value={"netguard@gmail.com"} onChange={event => {setEmail(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter a valid email!"} isHidden={hidden[1]}>Email</InputField>
                    <SaveButton/>
                </UserInfo>

                <ChangePassword>
                    <InputField type={"password"} onChange={event => {setPassword0(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter minimum 8 characters!"} isHidden={hidden[2]}>Current Password</InputField>
                    <InputField type={"password"} onChange={event => {setPassword1(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter minimum 8 characters!"} isHidden={hidden[3]}>New Password</InputField>
                    <InputField type={"password"} onChange={event => {setPassword2(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter the same password!"} isHidden={hidden[4]}>Confirm password</InputField>
                    <ChangePassButton/>
                </ChangePassword>
                
            </div>
        </>
        
    )
}