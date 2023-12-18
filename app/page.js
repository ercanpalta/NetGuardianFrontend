import Image from 'next/image'
import styles from './page.module.css'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import ForgotPass from './pages/forgot-pass/forgot-pass'
import BasicHeader from './components/header/header'

export default function Home() {
  return (
    <>
       <ForgotPass/>
    </>
  )
}
