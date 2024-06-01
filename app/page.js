import Image from 'next/image'
import styles from './page.module.css'
import Login from './(pages)/login/page'
import SignUp from './(pages)/(auth)/signup/page'
import ForgotPass from './(pages)/(auth)/forgot-pass/page'
import BasicHeader from './components/header/header'


export default function Home() {
  return (
    <>
       <Login/>
    </>
  )
}
