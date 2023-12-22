import "./request-list-item.css"

export default function RequestItem({...params}) {
    return(
        <div className="request-list-item">
            <p className="item-text">{params.sourceIp}</p>
            <p className="item-text">{params.destIp}</p>
            <p className="item-text">{params.protocol}</p>
            <p className="item-text">{params.time}</p>
            <p className="item-text">{params.date}</p>
            
            {params.permission == "Allowed" ? (
                <p className="item-text">Allowed  <img className="permission-image" src="../../icons/allowed.svg"/></p>
                
            ) : (
                <p className="item-text">Denied <img className="permission-image" src="../../icons/denied.svg"/></p>
            ) }

        </div>
    )
 
}