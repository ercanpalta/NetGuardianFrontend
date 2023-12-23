import "./alert-list-item.css"
import BlacklistButton from "../buttons/blacklist-button"
import WhitelistButton from "../buttons/whitelist-button"

export default function AlertItem({...params}) {
    return(
        <div className="alert-list-item">
            {params.alertRisk == "high" ? (
                <p className="alert-item-text"><img className="alert-risk-image" src="../../icons/red-circle.svg"/>{params.alertType}</p>
            ):(
                <p className="alert-item-text"><img className="alert-risk-image" src="../../icons/orange-circle.svg"/>{params.alertType}</p>
            )}
            
            <p className="alert-item-text">{params.ipAddress}</p>
            <p className="alert-item-text">{params.time}</p>
            <p className="alert-item-text">{params.date}</p>
            <BlacklistButton/>
            <WhitelistButton/>

        </div>
    )
 
}