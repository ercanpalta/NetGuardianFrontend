import "./recent-list-container.css"

export default function RecentAlertsListContainer({children}) {
    return(
        <div className="recent-alert-list-dash">
            <p className="dashboard-title">Recent Alerts</p>
            <div className="recent-alerts-list-container">
                {children}
            </div>
        </div>
        
    )
}