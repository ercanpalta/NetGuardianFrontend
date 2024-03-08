import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"

export default function Whitelist({handleClick}){

    const [whitelist, setWhitelist] = useState(null)

    const changeData = (id) => {
        // 200 döndükten sonra yeni istek atmadan manuel olarak elimizdeki listeyi güncelliyoruz
        let arr = [...whitelist]
        for (let i = 0; i < whitelist.length; i++) { 
            if (whitelist[i].id === id) { 
                delete arr[i];
                setWhitelist(arr) 
            } 
        }
    }

    useEffect(
        () => {         
            fetch("http://localhost:3004/whitelist", { cache: 'no-store' })
            .then((response) => response.json())
            .then(data => setWhitelist(data))  
        }, []
    )

    return(
        <>
            {whitelist && whitelist.map(
                function(data){
                    return(
                        <WBListItem handleClick={ () => handleClick("whitelist", data.id, () => changeData(data.id))} {...data} key={data.id}/>
                    ) 
                }
            )}
        </>
    )
}