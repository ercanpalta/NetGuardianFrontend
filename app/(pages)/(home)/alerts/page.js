import AlertsContainer from "@/app/components/alerts/container/container"
import AlertItem from "@/app/components/alerts/list-item/alert-list-item"
import AlertItemTitles from "@/app/components/alerts/list-item-titles/list-item-titles"
import AlertsListContainer from "@/app/components/alerts/list-container/list-container"
import "./alerts.css"

const getData = async () => {
    const res = await fetch("http://localhost:3004/alerts", { cache: 'no-store' })
    return res.json()
} 

export default async function Alerts() {
    const data = await getData()

    // let params = [{
    //     alertRisk:"high",
    //     alertType:"Type",
    //     ipAddress:"192.168.0.1",
    //     time:"13:20",
    //     date:"07.10.2024"
    // },
    // {   
    //     alertRisk:"middle",
    //     alertType:"Type",
    //     ipAddress:"192.168.0.1",
    //     time:"13:20",
    //     date:"07.10.2024"
    // }]

    return(
        <div className="alerts-page">
            <AlertsContainer>
                <AlertItemTitles/>
                <AlertsListContainer>
                    {
                        data.map(
                            function(data) {
                                return(
                                    <AlertItem {...data} key={data.id}/>
                                )
                            }
                        )
                    }
                </AlertsListContainer>
            </AlertsContainer>
        </div>
    )
}