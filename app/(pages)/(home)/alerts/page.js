import AlertsContainer from "@/app/components/alerts/container/container"
import AlertItem from "@/app/components/alerts/list-item/alert-list-item"
import AlertItemTitles from "@/app/components/alerts/list-item-titles/list-item-titles"
import AlertsListContainer from "@/app/components/alerts/list-container/list-container"
import "./alerts.css"

export default function Alerts() {
    let params = [{
        alertRisk:"high",
        alertType:"Type",
        ipAddress:"192.168.0.1",
        time:"13:20",
        date:"07.10.2024"
    },
    {   
        alertRisk:"middle",
        alertType:"Type",
        ipAddress:"192.168.0.1",
        time:"13:20",
        date:"07.10.2024"
    }]

    return(
        <div className="alerts-page">
            <AlertsContainer>
                <AlertItemTitles/>
                <AlertsListContainer>
                    <AlertItem {...params[0]} />
                    <AlertItem {...params[1]} />
                    <AlertItem {...params[0]} />
                    <AlertItem {...params[1]} />
                    <AlertItem {...params[0]} />
                    <AlertItem {...params[1]} />
                    <AlertItem {...params[0]} />
                    <AlertItem {...params[1]} />
                    <AlertItem {...params[0]} />
                    <AlertItem {...params[1]} />
                </AlertsListContainer>
            </AlertsContainer>
        </div>
    )
}