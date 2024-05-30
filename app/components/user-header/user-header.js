import "./user-header.css"

export default function  UserHeader() {
    return (
      <div id="header">
        <div id="icon-name">
          <img src="../logo.jpg" id="header-icon"/>
          <p id="app-name">NetGuardian</p>
        </div>
        <p id="header-title">Network Monitoring System</p>
        <div id="icon-user">
          <p id="user-name">NetGuardian</p>
          <img src="../icons/user.svg" id="user-icon"/>
        </div>
      </div>
    )
  }