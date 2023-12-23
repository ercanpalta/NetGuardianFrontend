import "./white-container.css"

export default function WhitelistContainer({children}) {
    return(
        <div className="whitelist">
            <div className="whitelist-header">
                <img className="img" src="../../icons/whitelist.svg" />
                <p className="whitelist-text">Whitelist</p>
            </div>
            <div className="whitelist-container">
                {children}
            </div>
        </div>
        
    )
}