import DevicesContainer from "@/app/components/devices/container/container"
import DeviceItem from "@/app/components/devices/list-item/device-list-item"
import DevicesListContainer from "@/app/components/devices/list-container/list-container"
import "./devices.css"

export default function Devices() {
    let params = [{
        osName:"Windows",
        ipAddress:"192.168.0.1"
    },
    {   
        osName:"Linux",
        ipAddress:"192.168.0.1"
    },
    {   
        osName:"Android",
        ipAddress:"192.168.0.1"
    },
    {   
        osName:"iOS",
        ipAddress:"192.168.0.1"
    },
    {   
        osName:"iOSss",
        ipAddress:"192.168.0.1"
    }]

    return(
        <div className="alerts-page">
            <DevicesContainer>
                <DevicesListContainer>
                    <DeviceItem {...params[0]} />
                    <DeviceItem {...params[1]} />
                    <DeviceItem {...params[2]} />
                    <DeviceItem {...params[3]} />
                    <DeviceItem {...params[0]} />
                    <DeviceItem {...params[1]} />
                    <DeviceItem {...params[2]} />
                    <DeviceItem {...params[3]} />
                    <DeviceItem {...params[0]} />
                    <DeviceItem {...params[1]} />
                    <DeviceItem {...params[2]} />
                    <DeviceItem {...params[3]} />
                    <DeviceItem {...params[0]} />
                    <DeviceItem {...params[1]} />
                    <DeviceItem {...params[4]} />
                </DevicesListContainer>
            </DevicesContainer>
        </div>
    )
}