import { useEffect, useState } from "react"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"
import { useRouter } from "next/navigation"

export default function Blacklist({handleClick}){
    const router = useRouter()

    const [blacklist, setBlacklist] = useState(null)

    useEffect(
        () => {         
            fetch("http://localhost:3004/blacklist", { cache: 'no-store' })
            .then((response) => response.json())
            .then(data => setBlacklist(data))  
        }
    )

    return(
        <>
            {blacklist && blacklist.map(
                function(data){
                    return(
                        <WBListItem handleClick={ () => handleClick("blacklist", data.id, router.refresh)} {...data} key={data.id}/>
                    ) 
                }
            )}
        </>
    )
}