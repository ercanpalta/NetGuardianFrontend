"use client"

import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"

export default function Whitelist({handleClick}){

    const [whitelist, setWhitelist] = useState(null)

    const changeData = (id) => {
        // 200 döndükten sonra yeni istek atmadan manuel olarak elimizdeki listeyi güncelliyoruz
        let arr = [...whitelist]
        for (let i = 0; i < whitelist.length; i++) { 
            if (whitelist[i].ID === id) { 
                arr.splice(i,1);
                setWhitelist(arr) 
            } 
        }
    }

    useEffect(
        () => {         
            fetch("http://localhost:3000/wblists/api?list=whitelist", { cache: 'no-store' })
            .then((response) => response.json())
            .then(json => setWhitelist(json.data))  
        }, []
    )

    return(
        <>
            {whitelist && whitelist.map(
                function(data){
                    return(
                        <WBListItem handleClick={ () => handleClick("whitelist", data.ID, () => changeData(data.ID))} {...data} key={data.ID}/>
                    ) 
                }
            )}
        </>
    )
}