import Image from 'next/image'
import styles from './page.module.css'
import Login from './pages/login/login'
import BasicHeader from './components/header/header'

export default function Home() {
  return (
    <>
      <Login/>
    </>
  )
}
