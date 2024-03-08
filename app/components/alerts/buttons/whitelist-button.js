import "./wblist-buttons.css"

export default function WhitelistButton({handleClick}){
    return(
        <button className="wblist-button" onClick={handleClick}>
            <img className="wblist-image"  src="../../icons/whitelist.svg"/>
            Whitelist
        </button>
    )
}