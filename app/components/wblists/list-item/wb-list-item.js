"use client"

import "./wb-list-item.css"
import WBListRemoveButton from "../button/wblist-remove-button"

export default function WBListItem({handleClick, ...params}) {
    return(
        <div className="wb-list-item">
            <p className="wblist-item-text">{params.IPAddress}</p>
            <p className="wblist-item-text">{(params.Date) ? params.Date.substring(0,10).split('-').reverse().join('.') : params.Date}</p>
            <WBListRemoveButton handleClick={handleClick}/>
        </div>
    )
 
}