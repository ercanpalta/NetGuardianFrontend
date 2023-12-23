import "./list-item-titles.css"

export default function WBListItemTitles({...params}) {
    return(
        <div className="wblist-item-titles">
            <p className="wblist-item-title">Ip Address</p>
            <p className="wblist-item-title">Date</p>
            <p className="wblist-item-title">Remove</p>
        </div>
    )
 
}