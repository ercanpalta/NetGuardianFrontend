import "./wb-list-item.css"
import WBListRemoveButton from "../button/wblist-remove-button"

export default function WBListItem({...params}) {
    return(
        <div className="wb-list-item">
            <p className="wblist-item-text">{params.ipAddress}</p>
            <p className="wblist-item-text">{params.date}</p>
            <WBListRemoveButton/>
        </div>
    )
 
}