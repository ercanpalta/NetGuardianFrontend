import "./login-button.css"

export default function  LoginButton({handleClick}) {
    return (
      <button id="login-button" onClick={handleClick}>
        <p id="login-b-txt">Login</p>
      </button>
    )
  }