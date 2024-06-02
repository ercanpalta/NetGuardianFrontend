import "./change-pass-button.css"

export default function ChangePassButton({handleClick}){

    return(
        <button className="change-pass-button" onClick={handleClick}>Change Password</button>
    )
}