"use client"

import "./wblist-remove-button.css"

export default function WBListRemoveButton({handleClick}){

    return(
        <button className="wblist-remove-button" onClick={handleClick}>
            <img className="wblist-remove-image"  src="../../icons/remove.svg"/>
            Remove
        </button>
    )
}