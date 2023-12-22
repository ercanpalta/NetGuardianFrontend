import RequestsContainer from "@/app/components/requests/container/container"
import RequestItem from "@/app/components/requests/list-item/request-list-item"
import RequestItemTitles from "@/app/components/requests/list-item-titles/list-item-titles"
import ListContainer from "@/app/components/requests/list-container/list-container"
import "./requests.css"

export default function Requests() {
    let params = [{
        sourceIp:"192.168.0.1",
        destIp:"192.168.0.1",
        protocol:"TCP",
        time:"13:20",
        date:"07.10.2024",
        permission:"Allowed"
    },
    {
        sourceIp:"192.168.0.1",
        destIp:"192.168.0.1",
        protocol:"TCP",
        time:"13:20",
        date:"07.10.2024",
        permission:"Denied"
    }]

    return(
        <div className="requests-page">
            <RequestsContainer>
                <RequestItemTitles/>
                <ListContainer>
                    <RequestItem {...params[0]} />
                    <RequestItem {...params[1]} />
                    <RequestItem {...params[0]} />
                    <RequestItem {...params[1]} />
                    <RequestItem {...params[0]} />
                    <RequestItem {...params[1]} />
                    <RequestItem {...params[0]} />
                    <RequestItem {...params[1]} />
                    <RequestItem {...params[0]} />
                    <RequestItem {...params[1]} />
                </ListContainer>
            </RequestsContainer>
        </div>
    )
}