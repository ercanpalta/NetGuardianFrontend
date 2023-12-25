import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"
import { useRouter } from "next/navigation"

export default function Whitelist({handleClick}){
    const router = useRouter()

    const [whitelist, setWhitelist] = useState(null)

    useEffect(
        () => {         
            fetch("http://localhost:3004/whitelist", { cache: 'no-store' })
            .then((response) => response.json())
            .then(data => setWhitelist(data))  
        }
    )

    return(
        <>
            {whitelist && whitelist.map(
                function(data){
                    return(
                        <WBListItem handleClick={ () => handleClick("whitelist", data.id, router.refresh)} {...data} key={data.id}/>
                    ) 
                }
            )}
        </>
    )
}