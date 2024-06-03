import "./pie-chart-container.css"

export default function PieChartContainer({children, header}) {
    return(
        <div className="pie-chart-dash">
            <p className="dashboard-title">{header}</p>
            <div className="pie-chart-container">
                {children}
            </div>
        </div>
        
    )
}