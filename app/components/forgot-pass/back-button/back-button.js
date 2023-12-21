import Link from "next/link"
import "./back-button.css"

export default function  BackButton() {
    return (
      <button id="back-button">
        <Link href="/login" style={{textDecoration:"none"}}>
          <p id="back-b-txt">Back</p>
        </Link>
      </button>
      
      
    )
  }