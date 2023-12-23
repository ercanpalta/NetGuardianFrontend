import "./black-container.css"

export default function BlacklistContainer({children}) {
    return(
        <div className="blacklist">
            <div className="blacklist-header">
                <img className="img" src="../../icons/blacklist.svg" />
                <p className="blacklist-text">Blacklist</p>
            </div>
            <div className="blacklist-container">
                {children}
            </div>
        </div>
        
    )
}