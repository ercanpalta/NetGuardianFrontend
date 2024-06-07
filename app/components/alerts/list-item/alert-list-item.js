import "./alert-list-item.css"
import BlacklistButton from "../buttons/blacklist-button"
import WhitelistButton from "../buttons/whitelist-button"

export default function AlertItem({handleWhiteClick, handleBlackClick,  ...params}) {
    return(
        <div className="alert-list-item">
            {params.AlertRisk == "high" ? (
                <p className="alert-type-text"><img className="alert-risk-image" src="../../icons/red-circle.svg"/>{params.AlertType}</p>
            ):(
                <p className="alert-type-text"><img className="alert-risk-image" src="../../icons/orange-circle.svg"/>{params.AlertType}</p>
            )}
            
            <p className="alert-item-text">{params.IPAddress}</p>
            <p className="alert-item-text">{params.createdAt.substring(11,16)}</p>
            <p className="alert-item-text">{params.createdAt.substring(0,10).split('-').reverse().join('.')}</p>
            <BlacklistButton handleClick={handleBlackClick} />
            <WhitelistButton handleClick={handleWhiteClick} />

        </div>
    )
 
}