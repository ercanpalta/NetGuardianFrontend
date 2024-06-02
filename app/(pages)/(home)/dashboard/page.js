import DashboardContainer from "@/app/components/dashboard/container/container"
import './dashboard.css'
import RecentAlertsListContainer from "@/app/components/dashboard/recent-alerts/list-container/recent-list-container"
import RecentAlertItem from "@/app/components/dashboard/recent-alerts/list-item/recent-alert-list-item"

export default function Dashboard() {
    return(
        <>
            <DashboardContainer>

                <RecentAlertsListContainer>
                    <RecentAlertItem alertRisk={"high"} alertType={"TCP SYN Scan"}/>
                    <RecentAlertItem alertRisk={"med"} alertType={"TCP SYN Scan"}/>
                    <RecentAlertItem alertRisk={"high"} alertType={"TCP SYN Scan"}/>
                    <RecentAlertItem alertRisk={"med"} alertType={"TCP SYN Scan"}/>
                </RecentAlertsListContainer>

            </DashboardContainer>
        </>
    )
}