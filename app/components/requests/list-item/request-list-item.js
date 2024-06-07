import "./request-list-item.css"

export default function RequestItem({...params}) {
    return(
        <div className="request-list-item">
            <p className="item-text">{params.SourceIP}</p>
            <p className="item-text">{params.DestIP}</p>
            <p className="item-text">{params.Protocol}</p>
            <p className="item-text">{params.Time}</p>
            <p className="item-text">{params.Date.substring(0,10).split('-').reverse().join('.')}</p>
            
            {params.Permission == "Allowed" ? (
                <p className="item-text">Allowed  <img className="permission-image" src="../../icons/allowed.svg"/></p>
                
            ) : (
                <p className="item-text">Denied <img className="permission-image" src="../../icons/denied.svg"/></p>
            ) }

        </div>
    )
 
}