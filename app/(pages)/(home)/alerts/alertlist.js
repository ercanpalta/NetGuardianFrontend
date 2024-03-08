import { useState, useEffect } from "react";
import AlertItem from "@/app/components/alerts/list-item/alert-list-item";

export default function Alertlist({handleClick}) {

    const [alertlist, setAlertlist] = useState(null)

    const changeData = (id) => {
        // 200 döndükten sonra yeni istek atmadan manuel olarak elimizdeki listeyi güncelliyoruz
        let arr = [...alertlist]
        for (let i = 0; i < alertlist.length; i++) { 
            if (alertlist[i].id === id) { 
                delete arr[i];
                setAlertlist(arr)
            } 
        }
    }

    useEffect(
        () => {         
            fetch("http://localhost:3004/alerts", { cache: 'no-store' })
            .then((response) => response.json())
            .then(data => setAlertlist(data))  
        }, []
    )

    return(
        <>
            {alertlist && alertlist.map(
                function(data){
                    return(
                        <AlertItem 
                            handleWhiteClick={ () => handleClick("whitelist", data.id, () => changeData(data.id))}
                            handleBlackClick={ () => handleClick("blacklist", data.id, () => changeData(data.id))}
                             {...data} key={data.id}/>
                    ) 
                }
            )}
        </>
    )
}