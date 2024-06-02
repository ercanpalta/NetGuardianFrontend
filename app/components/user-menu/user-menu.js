import LogoutButton from "./logout-button/logout-button"
import ProfileButton from "./profile-button/profile-button"
import "./user-menu.css"

export default function  UserMenu({handleProfile, handleLogout}) {
    return (
        <div className="user-menu">
            <ProfileButton handleClick={handleProfile}/>
            <LogoutButton handleClick={handleLogout}/>
        </div>
    )
}
  