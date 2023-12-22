import "./container.css"

export default function RequestsContainer({children}) {
    return(
        <>
            <div className="requests-header">
                <img className="img" src="../../icons/requests.svg" />
                <p className="requests-text">Requests</p>
            </div>
            <div className="requests-container">
                {children}
            </div>
        </>
        
    )
}