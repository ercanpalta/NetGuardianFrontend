import "./sparkline-container.css"

export default function SparklineContainer({children, header}) {
    return(
        <div className="sparkline-dash">
            <div className="sparkline-container">
                {children}
            </div>
            <p className="sparkline-title">{header}</p>
        </div>
        
    )
}