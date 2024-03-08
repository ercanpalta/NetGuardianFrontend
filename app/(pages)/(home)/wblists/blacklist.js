import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"

export default function Blacklist({handleClick}){

    const [blacklist, setBlacklist] = useState(null)
    
    const changeData = (id) => {
        // 200 döndükten sonra yeni istek atmadan manuel olarak elimizdeki listeyi güncelliyoruz
        let arr = [...blacklist]
        for (let i = 0; i < blacklist.length; i++) { 
            if (blacklist[i].id === id) { 
                delete arr[i];
                setBlacklist(arr) 
            } 
        }
        
    }
    
    useEffect(
        () => {
            fetch("http://localhost:3004/blacklist", { cache: 'no-store' })
                .then((response) => response.json())
                .then(data => setBlacklist(data))
        } , []
    )

    return(
        <>
            {blacklist && blacklist.map(
                function(data){
                    return(
                        <WBListItem handleClick={ () => handleClick("blacklist", data.id, () => changeData(data.id))} {...data} key={data.id}/>
                    ) 
                }
            )}
        </>
    )
}