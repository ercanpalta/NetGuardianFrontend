"use client"

import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import "./top-menu.css"
import Link from "next/link"



export default function  TopMenu() {
    const path = usePathname()
    const [selectedTab, setSelectedTab] = useState(path.slice(1))

    let tab

    function changeTab(pathName){
        if(pathName != selectedTab){
            tab.style.boxShadow = "none";
            setSelectedTab(pathName)
        }
    }

    useEffect(() => {
        tab = document.getElementById(selectedTab)
        tab.style.boxShadow = "1px 2px 0px 0px black";
    });
    
    return (
        <div className="top-menu">
            <Link href={"/dashboard"} style={{textDecoration:"none"}} onClick={() => changeTab("dashboard")}>
                <div className="item-menu" id="dashboard">
                    <img className="img-menu" src="../../icons/dashboard.svg" />
                    <p className="text-menu">Dashboard</p>
                </div>
            </Link>
            <Link href={"/requests"} style={{textDecoration:"none"}} onClick={() => changeTab("requests")}>
                <div className="item-menu" id="requests">
                    <img className="img-menu" src="../../icons/requests.svg" />  
                    <p className="text-menu">Requests</p>
                </div>
            </Link>
            <Link href={"/devices"} style={{textDecoration:"none"}} onClick={() => changeTab("devices")}>
                <div className="item-menu" id="devices">
                    <img className="img-menu" src="../../icons/devices.svg" />
                    <p className="text-menu">Devices</p> 
                </div>
            </Link>
            <Link href={"/alerts"} style={{textDecoration:"none"}} onClick={() => changeTab("alerts")}>
                <div className="item-menu" id="alerts">
                    <img className="img-menu" src="../../icons/alerts.svg" />
                    <p className="text-menu">Alerts</p>
                </div>
            </Link>
            <Link href={"/wblists"} style={{textDecoration:"none"}} onClick={() => changeTab("wblists")}>
                <div className="item-menu" id="wblists">
                    <img className="img-menu" src="../../icons/list.svg" />
                    <p className="text-menu">W&B Lists</p>
                </div>
            </Link>
        </div>
    )
}
  