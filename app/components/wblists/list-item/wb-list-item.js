"use client"

import "./wb-list-item.css"
import WBListRemoveButton from "../button/wblist-remove-button"

export default function WBListItem({handleClick, ...params}) {
    return(
        <div className="wb-list-item">
            <p className="wblist-item-text">{params.ipAddress}</p>
            <p className="wblist-item-text">{params.date}</p>
            <WBListRemoveButton handleClick={handleClick}/>
        </div>
    )
 
}