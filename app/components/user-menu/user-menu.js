import LogoutButton from "./logout-button/logout-button"
import ProfileButton from "./profile-button/profile-button"
import "./user-menu.css"

export default function  UserMenu({handleLogout}) {
    return (
        <div className="user-menu">
            <ProfileButton/>
            <LogoutButton handleClick={handleLogout}/>
        </div>
    )
}
  