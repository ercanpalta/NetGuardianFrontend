"use client"

import { useState } from "react"
import "./user-header.css"
import UserMenu from "../user-menu/user-menu";
import { useCookies } from 'next-client-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

export default function  UserHeader() {
    
    const [showMenu, setShowMenu] = useState(false);
    
    const cookies = useCookies();
    const router = useRouter()

    const notifyLogout = () => toast.info("Logging out!", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "dark",
      onClose: () => router.replace('/login')
    });
    
    const logout = () => {
        cookies.remove('token')
        notifyLogout()
    }

    return (
      <div id="header">
        <div id="icon-name">
          <img src="../logo.jpg" id="header-icon"/>
          <p id="app-name">NetGuardian</p>
        </div>
        <p id="header-title">Network Monitoring System</p>
        <div id="icon-user" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
          <p id="user-name">NetGuardian</p>
          <img src="../icons/user.svg" id="user-icon"/>
          {showMenu ? <UserMenu handleProfile={() => router.push('profile')} handleLogout={() => logout()}/> : null}
        </div>
        <ToastContainer/>
      </div>
    )
  }