"use client"

import AlertsContainer from "@/app/components/alerts/container/container"
import Alertlist from "./alertlist"
import AlertItemTitles from "@/app/components/alerts/list-item-titles/list-item-titles"
import AlertsListContainer from "@/app/components/alerts/list-container/list-container"
import "./alerts.css"
import { useState } from "react"
import AlertDialog from "@/app/components/alerts/dialogs/alert-dialog"

export default function Alerts() {
    
    const [isVisible, setVisibility] = useState(false)
    const [selectedItem, setSelectedItem] = useState()

    const handleClick = (listName, id, refresh) => {
        if(!isVisible){
            setSelectedItem({
                listName:listName,
                id:id,
                refresh:refresh
            })
            setVisibility(true)
        } 
    }

    const handleCancel = () => {
        setVisibility(false)
        setSelectedItem(null)
    }

    const handleAddList = (selectedItem) => {
        /* Bu kısımda 1 adet istek atılıp alert backend tarafında blackliste yada whiteliste eklenecek
            ve sonrasında görüntülenmeyecek ama dashboard ta sergilenecek*/
        fetch(`http://localhost:3000/alerts/post?id=${selectedItem.id}&list=${selectedItem.listName}`,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                }
        
        })
        .then(response => (response.status == 200 ? selectedItem.refresh() : null))
        setSelectedItem(null)
        setVisibility(false)
        console.log("added")
    }

    return(
        <>
            <div className="alerts-page">
                <AlertsContainer>
                    <AlertItemTitles/>
                    <AlertsListContainer>
                        <Alertlist handleClick={handleClick}/>
                    </AlertsListContainer>
                </AlertsContainer>
            </div>
            {isVisible ? <AlertDialog handleCancel={handleCancel} handleAddList={() => handleAddList(selectedItem)} listName={selectedItem.listName}/> : null}
        </>
        
    )
}