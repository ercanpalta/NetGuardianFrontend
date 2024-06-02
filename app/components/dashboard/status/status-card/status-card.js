import "./status-card.css"

export default function StatusCard({src, header, text}) {
    return(
        <div className="status-card">
            <img className="status-card-image" src={src}/>
            <div className="status-card-container">
                <p className="card-title">{header}</p>
                <p className="card-text">{text}</p>
            </div>
        </div>
        
    )
}