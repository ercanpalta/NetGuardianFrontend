"use client"

import UserInfo from "@/app/components/profile/user-info/user-info"
import ChangePassword from "@/app/components/profile/change-pass/change-pass"
import "./profile.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import InputField from "@/app/components/profile/input-field/input-field"
import SaveButton from "@/app/components/profile/save-button/save-button"
import ChangePassButton from "@/app/components/profile/change-pass-button/change-pass-button"
import { useCookies } from 'next-client-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import md5 from 'md5';



export default function Profile() {

    const [name, setName] = useState(null); 
    const [email, setEmail] = useState(null);
    const [password0, setPassword0] = useState(null); 
    const [password1, setPassword1] = useState(null); 
    const [password2, setPassword2] = useState(null); 
    const [hidden, setHidden] = useState([true,true,true,true,true])

    const router = useRouter()
    const cookies = useCookies();

    const setData = (data) => {
        setName(data.fullName)
        setEmail(data.email)
    }

    useEffect(
        () => {         
            fetch(`http://localhost:3000/profile/api?id=${cookies.get('token')}`, { cache: 'no-store' })
            .then((response) => response.json())
            .then(json => setData(json.data))
            .catch((error) => console.log(error));  
        }, []
    )


    const checkInputs = (password0, password1, password2) => {
        if(checkPassword(password0)){
            setHidden([true,true,false,true,true])
        }else if(checkPassword(password1)){
            setHidden([true,true,true,false,true])
        }else if(password2 == null || password1 != password2){
            setHidden([true,true,true,true,false])
        }else{
            var encryptedPassword0 = encryptPassword(password0)
            var encryptedPassword1 = encryptPassword(password1)
           handlePassChange(email, encryptedPassword1, encryptedPassword0)
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

    const notifySuccess = () => toast.success("Your password successfully changed!", {
        position: "top-center",
      });

      const notifyError = () => toast.error("Error!", {
        position: "top-center"
    });

    const handlePassChange = (email, newPassword, oldPassword) => {
        fetch(`http://localhost:3000/profile/pass?email=${email}&newPassword=${newPassword}&oldPassword=${oldPassword}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
            }).then(response => response.status == 200 ? notifySuccess() : notifyError())
    }
    
    return(
        <>  
            <div className="profile-header">
                <img className="back-button" src="../../icons/back.svg" onClick={() => router.back()}/>
                <p className="header-text">Profile</p>
            </div>
            

            <div className="containers">

                <UserInfo>
                    <img className="profile-pic" src="../../icons/profilepic.svg"/>
                    <InputField type={"text"} value={name && name}   onChange={event => {setName(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter a name!"} isHidden={hidden[0]}>Name</InputField>
                    <InputField type={"text"} value={email && email} onChange={event => {setEmail(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter a valid email!"} isHidden={hidden[1]}>Email</InputField>
                    <SaveButton/>
                </UserInfo>

                <ChangePassword>
                    <InputField type={"password"} onChange={event => {setPassword0(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter minimum 8 characters!"} isHidden={hidden[2]}>Current Password</InputField>
                    <InputField type={"password"} onChange={event => {setPassword1(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter minimum 8 characters!"} isHidden={hidden[3]}>New Password</InputField>
                    <InputField type={"password"} onChange={event => {setPassword2(event.target.value); setHidden([true,true,true,true,true])}} errorMessage={"Please enter the same password!"} isHidden={hidden[4]}>Confirm password</InputField>
                    <ChangePassButton handleClick={() => checkInputs(password0, password1, password2)}/>
                </ChangePassword>
                
            </div>

            <ToastContainer/>
        </>
        
    )
}