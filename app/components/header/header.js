import "./header.css"

export default function  BasicHeader() {
    return (
      <div id="header">
        <div id="icon-name">
          <img src="logo.jpg" id="header-icon"/>
          <p id="app-name">NetGuardian</p>
        </div>
        <p id="header-title">Network Monitoring System</p>
      </div>
    )
  }