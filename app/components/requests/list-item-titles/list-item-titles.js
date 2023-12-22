import "./list-item-titles.css"

export default function RequestItemTitles({...params}) {
    return(
        <div className="list-item-titles">
            <p className="item-title">Source Ip</p>
            <p className="item-title">Destination Ip</p>
            <p className="item-title">Protocol</p>
            <p className="item-title">Time</p>
            <p className="item-title">Date</p>
            <p className="item-title">Permission</p>
        </div>
    )
 
}