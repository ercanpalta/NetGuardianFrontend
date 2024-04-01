import CodeField from "../code-field/code-field"
import EmailText from "../email-text/email-text"
import SendButton from "../send-button/send-button"
import "./verify.css"

export default function  Verify({email, handleVerification, handleCodeInput}) {
    return (
      <div id="verify-container">
            <img src="../../icons/verified.svg"  style={{marginTop:"20px"}}/>
            <EmailText email={email}/>
            <CodeField type={"password"} handleCodeInput={handleCodeInput}/>
            <SendButton handleVerification={handleVerification}/>
      </div>
    )
}