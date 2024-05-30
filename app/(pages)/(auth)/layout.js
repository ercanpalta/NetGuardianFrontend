import BasicHeader from "@/app/components/header/header"
import './auth.css'

export default function AuthLayout({ children }) {
  return (
    <>
      <BasicHeader/>
      <main>{children}</main>
    </>
    
  )
}
