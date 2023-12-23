import "./top-menu.css"

export default function  TopMenu() {
    return (
        <div className="top-menu">
            <div className="item-menu">
                <img className="img-menu" src="../../icons/dashboard.svg" />
                <p className="text-menu">Dashboard</p>
            </div>
            <div className="item-menu">
                <img className="img-menu" src="../../icons/requests.svg" />  
                <p className="text-menu">Requests</p>
            </div>
            <div className="item-menu">
                <img className="img-menu" src="../../icons/devices.svg" />
                <p className="text-menu">Devices</p> 
            </div>
            <div className="item-menu">
                <img className="img-menu" src="../../icons/alerts.svg" />
                <p className="text-menu">Alerts</p>
            </div>
            <div className="item-menu">
                <img className="img-menu" src="../../icons/list.svg" />
                <p className="text-menu">W&B Lists</p>
            </div>
        </div>
    )
}
  