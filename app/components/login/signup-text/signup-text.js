import Link from "next/link";
import "./signup-text.css";

export default function SignupText() {
    return (
      <div className="sign-up-text">
        <p id="dont">Don’t have an account?</p>
        <Link href="/signup">
          <p id="create">Create a new account.</p>
        </Link>
      </div>
    )
}