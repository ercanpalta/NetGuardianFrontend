import WhitelistContainer from "@/app/components/wblists/white-container/white-container"
import BlacklistContainer from "@/app/components/wblists/black-container/black-container"
import WBListItem from "@/app/components/wblists/list-item/wb-list-item"
import WBListItemTitles from "@/app/components/wblists/list-item-titles/list-item-titles"
import WBListContainer from "@/app/components/wblists/list-container/list-container"
import "./wblists.css"

export default function WBLists() {
    let params = [{
        ipAddress:"192.168.0.1",
        date:"07.10.2024"
    },
    {
        ipAddress:"192.168.0.1",
        date:"07.10.2023"
    }]

    return(
        <div className="wblists-page">
            <WhitelistContainer>
                <WBListItemTitles/>
                <WBListContainer>
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                </WBListContainer>
            </WhitelistContainer>

            <BlacklistContainer>
                <WBListItemTitles/>
                <WBListContainer>
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                    <WBListItem {...params[0]} />
                    <WBListItem {...params[1]} />
                </WBListContainer>
            </BlacklistContainer>
        </div>
    )
}