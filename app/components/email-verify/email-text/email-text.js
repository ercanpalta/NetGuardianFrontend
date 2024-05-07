import "./email-text.css";

export default function EmailText({email}) {
    return (
      <div className="email-text">
        <p id="verify">Please verify your email</p>
        <p id="email">We just sent a code to <b>{email}</b> </p>
        <p id="enter">Enter the code to verify your account. </p>
      </div>
    )
}