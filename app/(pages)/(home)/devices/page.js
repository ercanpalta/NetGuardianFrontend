import DevicesContainer from "@/app/components/devices/container/container"
import DeviceItem from "@/app/components/devices/list-item/device-list-item"
import DevicesListContainer from "@/app/components/devices/list-container/list-container"
import "./devices.css"

const getData = async () => {
    const res = await fetch("http://localhost:3004/devices", { cache: 'no-store' })
    return res.json()
} 

export default async function Devices() {

    const data = await getData()

    // let params = [{
    //     osName:"Windows",
    //     ipAddress:"192.168.0.1"
    // },
    // {   
    //     osName:"Linux",
    //     ipAddress:"192.168.0.1"
    // },
    // {   
    //     osName:"Android",
    //     ipAddress:"192.168.0.1"
    // },
    // {   
    //     osName:"iOS",
    //     ipAddress:"192.168.0.1"
    // },
    // {   
    //     osName:"iOSss",
    //     ipAddress:"192.168.0.1"
    // }]

    return(
        <div className="alerts-page">
            <DevicesContainer>
                <DevicesListContainer>
                    {
                        data.map(
                            function(data) {
                                return(
                                    <DeviceItem {...data} />
                                )
                            }
                        )
                    }
                </DevicesListContainer>
            </DevicesContainer>
        </div>
    )
}