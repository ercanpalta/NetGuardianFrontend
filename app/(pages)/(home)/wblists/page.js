import WhitelistContainer from "@/app/components/wblists/white-container/white-container"
import BlacklistContainer from "@/app/components/wblists/black-container/black-container"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"
import WBListItemTitles from "@/app/components/wblists/list-item-titles/list-item-titles"
import WBListContainer from "@/app/components/wblists/list-container/list-container"
import "./wblists.css"

const getWhites = async () => {
    const res = await fetch("http://localhost:3004/whitelist", { cache: 'no-store' })
    return res.json()
}

const getBlacks = async () => {
    const res = await fetch("http://localhost:3004/blacklist", { cache: 'no-store' })
    return res.json()
} 

export default async function WBLists() {

    const whitelist = await getWhites()
    const blacklist = await getBlacks()

    // let params = [{
    //     ipAddress:"192.168.0.1",
    //     date:"07.10.2024"
    // },
    // {
    //     ipAddress:"192.168.0.1",
    //     date:"07.10.2023"
    // }]

    return(
        <div className="wblists-page">
            <WhitelistContainer>
                <WBListItemTitles/>
                <WBListContainer>

                    {
                        whitelist.map(
                            function(data){
                                return(
                                    <WBListItem {...data} />
                                ) 
                            }
                        )
                    }

                </WBListContainer>
            </WhitelistContainer>

            <BlacklistContainer>
                <WBListItemTitles/>
                <WBListContainer>
                    {
                        blacklist.map(
                            function(data){
                                return(
                                    <WBListItem {...data} />
                                ) 
                            }
                        )
                    }
                </WBListContainer>
            </BlacklistContainer>
        </div>
    )
}