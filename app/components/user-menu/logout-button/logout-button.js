import "./logout-button.css"

export default function  LogoutButton({handleClick}) {
    return (
        <button className="user-menu-logout-button" onClick={handleClick}>
            <img className="img-menu" src="../../icons/logout.svg" />
            <p className="text-menu">Logout</p>
        </button>
    )
  }