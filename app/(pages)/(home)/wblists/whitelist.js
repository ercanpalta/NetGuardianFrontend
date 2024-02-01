import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"

export default function Whitelist({handleClick}){

    const [whitelist, setWhitelist] = useState(null)

    const changeData = (id) => {
        for (let i = 0; i < whitelist.length; i++) { 
            if (whitelist[i].id === id) { 
                let spliced = whitelist.splice(i, 1); 
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