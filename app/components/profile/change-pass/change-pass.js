import "./change-pass.css"

export default function ChangePassword({children}) {
    return(
        <div className="change-pass">
            <div className="change-pass-header">
                <img className="img" src="../../icons/change-password.svg" />
                <p className="change-pass-text">Change Password</p>
            </div>
            <div className="change-pass-container">
                {children}
            </div>
        </div>
        
    )
}