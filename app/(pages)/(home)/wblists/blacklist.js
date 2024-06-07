"use client"

import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"

export default function Blacklist({handleClick}){

    const [blacklist, setBlacklist] = useState(null)
    
    const changeData = (id) => {
        // 200 döndükten sonra yeni istek atmadan manuel olarak elimizdeki listeyi güncelliyoruz
        let arr = [...blacklist]
        for (let i = 0; i < blacklist.length; i++) { 
            if (blacklist[i].ID === id) { 
                arr.splice(i,1);
                setBlacklist(arr) 
            } 
        }
    }
    
    useEffect(
        () => {
            fetch("http://localhost:3000/wblists/api?list=blacklist", { cache: 'no-store' })
            .then((response) => response.json())
            .then(json => setBlacklist(json.data))
        } , []
    )

    return(
        <>
            {blacklist && blacklist.map(
                function(data){
                    return(
                        <WBListItem handleClick={ () => handleClick("blacklist", data.ID, () => changeData(data.ID))} {...data} key={data.ID}/>
                    ) 
                }
            )}
        </>
    )
}