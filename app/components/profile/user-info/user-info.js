import "./user-info.css"

export default function UserInfo({children}) {
    return(
        <div className="userinfo">
            <div className="userinfo-header">
                <img className="img" src="../../icons/userinfo.svg" />
                <p className="userinfo-text">User Information</p>
            </div>
            <div className="userinfo-container">
                {children}
            </div>
        </div>
        
    )
}