import "./recent-alert-list-item.css"

export default function RecentAlertItem({...params}) {
    return(
        <div className="recent-alert-list-item">
            {params.alertRisk == "high" ? (
                <p className="recent-alert-item-text"><img className="recent-alert-risk-image" src="../../icons/red-circle.svg"/>{params.alertType}</p>
            ):(
                <p className="recent-alert-item-text"><img className="recent-alert-risk-image" src="../../icons/orange-circle.svg"/>{params.alertType}</p>
            )}
        </div>
    )
 
}