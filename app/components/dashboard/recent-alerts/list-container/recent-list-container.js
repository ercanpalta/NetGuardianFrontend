import "./recent-list-container.css"

export default function RecentAlertsListContainer({children}) {
    return(
        <>
            <p className="dashboard-title">Recent Alerts</p>
            <div className="alerts-list-container">
                {children}
            </div>
        </>
        
    )
}