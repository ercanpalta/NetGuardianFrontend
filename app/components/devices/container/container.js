import "./container.css"

export default function DevicesContainer({children}) {
    return(
        <>
            <div className="devices-header">
                <img className="img" src="../../icons/devices.svg" />
                <p className="devices-text">Devices</p>
            </div>
            <div className="devices-container">
                {children}
            </div>
        </>
        
    )
}