import "@/app/components/signup/signup-button/signup-button.css"

export default function  SignupButton({handleClick}) {
    return (
      <button id="signup-button" onClick={handleClick}>
        <p id="signup-b-txt">Sign up</p>
      </button>
    )
  }