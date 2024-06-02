import "./recent-alert-list-item.css"

export default function RecentAlertItem({...params}) {
    return(
        <div className="alert-list-item">
            {params.alertRisk == "high" ? (
                <p className="alert-item-text"><img className="alert-risk-image" src="../../icons/red-circle.svg"/>{params.alertType}</p>
            ):(
                <p className="alert-item-text"><img className="alert-risk-image" src="../../icons/orange-circle.svg"/>{params.alertType}</p>
            )}
        </div>
    )
 
}