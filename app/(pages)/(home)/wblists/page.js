"use client"

import WhitelistContainer from "@/app/components/wblists/white-container/white-container"
import BlacklistContainer from "@/app/components/wblists/black-container/black-container"
import WBListItemTitles from "@/app/components/wblists/list-item-titles/list-item-titles"
import WBListContainer from "@/app/components/wblists/list-container/list-container"
import RemoveDialog from "@/app/components/wblists/dialog/remove-dialog"
import Whitelist from "./whitelist"
import Blacklist from "./blacklist"
import "./wblists.css"
import { useState } from "react"



export default function WBLists() {
    
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

    const handleRemove = (selectedItem) => {
        fetch(`http://localhost:3004/${selectedItem.listName}/${selectedItem.id}`, {
            method: 'DELETE',
        }).then(selectedItem.refresh())
        setSelectedItem(null)
        setVisibility(false)
    }

    return(
        <>
            <div className="wblists-page">
                <WhitelistContainer>
                    <WBListItemTitles/>
                    <WBListContainer>
                        <Whitelist handleClick={handleClick}/>
                    </WBListContainer>
                </WhitelistContainer>

                <BlacklistContainer>
                    <WBListItemTitles/>
                    <WBListContainer>
                        <Blacklist handleClick={handleClick}/>
                    </WBListContainer>
                </BlacklistContainer>
            </div>
            {isVisible ? <RemoveDialog handleCancel={handleCancel} handleRemove={() => handleRemove(selectedItem)}/> : null}
        </>
        
    )
}