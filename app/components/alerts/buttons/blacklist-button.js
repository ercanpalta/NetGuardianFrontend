import "./wblist-buttons.css"

export default function BlacklistButton({handleClick}){
    return(
        <button className="wblist-button" onClick={handleClick}>
            <img className="wblist-image"  src="../../icons/blacklist.svg"/>
            Blacklist
        </button>
    )
}