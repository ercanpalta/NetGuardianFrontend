import "./list-item-titles.css"

export default function AlertItemTitles({...params}) {
    return(
        <div className="alert-list-item-titles">
            <p className="alert-type-title">Alert Type</p>
            <p className="alert-item-title">Ip Address</p>
            <p className="alert-item-title">Time</p>
            <p className="alert-item-title">Date</p>
            <p className="alert-item-title">Blacklist</p>
            <p className="alert-item-title">Whitelist</p>
        </div>
    )
 
}