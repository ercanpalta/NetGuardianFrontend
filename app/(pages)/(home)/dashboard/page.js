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
import { useState, useEffect } from "react"

export default function Dashboard() {

    const [data, setData] = useState()

    useEffect(
        () => {         
            fetch("http://localhost:3000/dashboard/api", { cache: 'no-store' })
            .then((response) => response.json())
            .then(json => setData(json.data))
            .catch((error) => console.log(error));  
        }, []
    )

    const countLists = (data) => {
        let count = 0
        if(!data.blacklists == null && !data.whitelists == null){
            count = data.blacklists.length + data.whitelists.lenth
        }else if(!data.blacklists == null && data.whitelists == null){
            count = data.blacklists.length
        }else if(data.blacklists == null && !data.whitelists == null){
            count = data.whitelists.length
        }

        return count
    }

    const countProtocols = (data) => {
        let count = 0
        const protocols = []
        for(let i=0 ; i < data.requests.length; i++) {
            const protocol = data.requests[i].Protocol
            if(!protocols.includes(protocol)){
                protocols.push(protocol)
                count++
            }
        }

        return count
    }

    const countAllowed = (data) => {
        let count = 0
        for(let i=0 ; i < data.requests.length; i++) {
            const permission = data.requests[i].Permission
            if(permission == "Allowed"){
                count++
            }
        }

        return count
    }

    const countMid = (data) => {
        let count = 0
        for(let i=0 ; i < data.alerts.length; i++) {
            const risk = data.alerts[i].AlertRisk
            if(risk == "Medium"){
                count++
            }
        }

        return count
    }

    const countHigh = (data) => {
        let count = 0
        for(let i=0 ; i < data.alerts.length; i++) {
            const risk = data.alerts[i].AlertRisk
            if(risk == "High"){
                count++
            }
        }

        return count
    }


    

    return(
        <>
            <DashboardContainer className="dashboard-container">

                <StatusContainer header={"Status"}>
                    <StatusCard src={"../../icons/network.svg"} header={"Monitoring"} text={`Active`}/>
                    <StatusCard src={"../../icons/multiple-devices.svg"} header={"Devices"} text={`${data && data.devices.length} devices detected`}/>
                    <StatusCard src={"../../icons/network-card.svg"} header={"Protocols"} text={`${data && countProtocols(data)} protocols used`}/>
                    <StatusCard src={"../../icons/anylist.svg"} header={"White & Black lists"} text={`${data && countLists(data)} IPs added`}/>
                </StatusContainer>


                <div className="charts-column">
                    <PieChartContainer header={"Requests"}>
                        <PieChart
                            colors={['#6096B4', '#FFBA47', '#FF5B44']} // Use palette
                            series={[
                                {
                                    data: [
                                        { id: 0, value: data && countAllowed(data), label: 'Allowed' },
                                        { id: 1, value: data && countMid(data), label: 'Mid Alert' },
                                        { id: 2, value: data && countHigh(data), label: 'High Alert' },
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
                        <SparkLine data={[1, 4, 2, 5, 7, 2, 4, 6]}/>
                    </SparklineContainer>

                </div>


                <RecentAlertsListContainer>
                    {
                        data && data.alerts.slice(0,4).map(
                            function(data) {
                                return(<RecentAlertItem alertRisk={data.AlertRisk} alertType={data.AlertType}/>)
                            }
                            
                        )
                    }
                </RecentAlertsListContainer>


            </DashboardContainer>
        </>
    )
}