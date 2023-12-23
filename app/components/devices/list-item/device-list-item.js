import "./device-list-item.css"

export default function DeviceItem({...params}) {

    function osImage(params){
        switch(params.osName) {
            case "Windows":
                return (<img className="device-image" src="../../icons/windows.svg"/>)
            case "Linux":
                return (<img className="device-image" src="../../icons/linux.svg"/>)
            case "Android":
                return (<img className="device-image" src="../../icons/android.svg"/>)
            case "iOS":
                return (<img className="device-image" src="../../icons/ios.svg"/>)
            default:
                return (<img className="device-image" src="../../icons/os.svg"/>)
        }
    }

    

    return(
        <div className="device-list-item">
            <p className="device-item-text">{params.osName}</p>
            {osImage(params)}
            <p className="device-item-text">{params.ipAddress}</p>
        </div>
    )
 
}