"use client"

import { useState, useEffect } from "react";
import AlertItem from "@/app/components/alerts/list-item/alert-list-item";

export default function Alertlist({handleClick}) {

    const [alertlist, setAlertlist] = useState(null)

    const changeData = (id) => {
        // 200 döndükten sonra yeni istek atmadan manuel olarak elimizdeki listeyi güncelliyoruz
        let arr = [...alertlist]
        for (let i = 0; i < alertlist.length; i++) { 
            if (alertlist[i].id === id) { 
                arr.splice(i,1);
                setAlertlist(arr)
            } 
        }
    }

    useEffect(
        () => {         
            fetch("http://localhost:3000/alerts/api", { cache: 'no-store' })
            .then((response) => response.json())
            .then(json => setAlertlist(json.data))
            .catch((error) => console.log(error));  
        }, []
    )

    return(
        <>
            {alertlist && alertlist.map(
                function(data){
                    return(
                        <AlertItem 
                            handleWhiteClick={ () => handleClick("whitelist", data.ID, () => changeData(data.ID))}
                            handleBlackClick={ () => handleClick("blacklist", data.ID, () => changeData(data.ID))}
                             {...data} key={data.ID}/>
                    ) 
                }
            )}
        </>
    )
}