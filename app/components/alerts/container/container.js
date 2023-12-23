import "./container.css"

export default function AlertsContainer({children}) {
    return(
        <>
            <div className="alerts-header">
                <img className="img" src="../../icons/alerts.svg" />
                <p className="alerts-text">Alerts</p>
            </div>
            <div className="alerts-container">
                {children}
            </div>
        </>
        
    )
}