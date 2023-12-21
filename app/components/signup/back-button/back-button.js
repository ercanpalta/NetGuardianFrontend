import "./back-button.css"
import Link from "next/link"

export default function  BackButton() {
    return (
      <button id="back-button">
        <Link href="/login" style={{textDecoration:"none"}}>
          <p id="back-b-txt">Back</p>
        </Link>
      </button>
    )
  }