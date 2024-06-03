"use client"

import DashboardContainer from "@/app/components/dashboard/container/container"
import './dashboard.css'
import RecentAlertsListContainer from "@/app/components/dashboard/recent-alerts/list-container/recent-list-container"
import RecentAlertItem from "@/app/components/dashboard/recent-alerts/list-item/recent-alert-list-item"
import { PieChart } from '@mui/x-charts/PieChart';  
import PieChartContainer from "@/app/components/dashboard/charts/pie-chart-container/pie-chart-container"
import StatusContainer from "@/app/components/dashboard/status/status-container/status-container"
import StatusCard from "@/app/components/dashboard/status/status-card/status-card"
import SparkLine from "@/app/components/dashboard/charts/sparkline/sparkline-chart/sparkline-chart"
import SparklineContainer from "@/app/components/dashboard/charts/sparkline/sparkline-container/sparkline-container"

export default function Dashboard() {
    return(
        <>
            <DashboardContainer className="dashboard-container">

                <StatusContainer header={"Status"}>
                    <StatusCard src={"../../icons/network.svg"} header={"Monitoring"} text={`Active`}/>
                    <StatusCard src={"../../icons/multiple-devices.svg"} header={"Devices"} text={`${8} devices detected`}/>
                    <StatusCard src={"../../icons/network-card.svg"} header={"Protocols"} text={`${5} protocols used`}/>
                    <StatusCard src={"../../icons/anylist.svg"} header={"White & Black lists"} text={`${3} IPs added`}/>
                </StatusContainer>


                <div className="charts-column">
                    <PieChartContainer header={"Requests"}>
                        <PieChart
                            colors={['#6096B4', '#FFBA47', '#FF5B44']} // Use palette
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Allowed' },
                                        { id: 1, value: 4, label: 'Mid Alert' },
                                        { id: 2, value: 4, label: 'High Alert' },
                                    ],
                                    innerRadius: 40,
                                    outerRadius: 60,
                                    paddingAngle: 2,
                                    cornerRadius: 5,
                                },
                            ]}
                            width={370}
                            height={160}
                        />
                    </PieChartContainer>

                    <SparklineContainer header={"Requests in the last 7 days"}>
                        <SparkLine/>
                    </SparklineContainer>

                </div>


                <RecentAlertsListContainer>
                    <RecentAlertItem alertRisk={"high"} alertType={"SSH Brute Force"}/>
                    <RecentAlertItem alertRisk={"high"} alertType={"SSH Brute Force"}/>
                    <RecentAlertItem alertRisk={"med"} alertType={"TCP SYN Scan"}/>
                    <RecentAlertItem alertRisk={"med"} alertType={"TCP SYN Scan"}/>
                </RecentAlertsListContainer>


            </DashboardContainer>
        </>
    )
}