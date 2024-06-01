import "./profile-button.css"

export default function  ProfileButton({handleClick}) {
    return (
        <button className="user-menu-profile-button" onClick={handleClick}>
            <img className="img-menu" src="../../icons/profile.svg" />
            <p className="text-menu">Profile</p>
        </button>
    )
  }