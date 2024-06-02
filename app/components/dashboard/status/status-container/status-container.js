import "./status-container.css"

export default function StatusContainer({children, header}) {
    return(
        <div className="status-dash">
            <p className="dashboard-title">{header}</p>
            <div className="status-container">
                {children}
            </div>
        </div>
        
    )
}