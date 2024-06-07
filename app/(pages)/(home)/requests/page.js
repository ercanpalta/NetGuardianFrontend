import RequestsContainer from "@/app/components/requests/container/container"
import RequestItem from "@/app/components/requests/list-item/request-list-item"
import RequestItemTitles from "@/app/components/requests/list-item-titles/list-item-titles"
import RequestsListContainer from "@/app/components/requests/list-container/list-container"
import "./requests.css"

const getData = async () => {
    const res = await fetch("http://localhost:8080/requests", { cache: 'no-store' })
    return res.json()
} 

export default async function Requests() {

    const data = await getData()

    // let params = [{
    //     sourceIp:"192.168.0.1",
    //     destIp:"192.168.0.1",
    //     protocol:"TCP",
    //     time:"13:20",
    //     date:"07.10.2024",
    //     permission:"Allowed"
    // },
    // {
    //     sourceIp:"192.168.0.1",
    //     destIp:"192.168.0.1",
    //     protocol:"TCP",
    //     time:"13:20",
    //     date:"07.10.2024",
    //     permission:"Denied"
    // }]

    return(
        <div className="requests-page">
            <RequestsContainer>
                <RequestItemTitles/>
                <RequestsListContainer>
                    {
                        data.map(
                            function(data) {
                                return(
                                    <RequestItem {...data} key={data.ID}/>
                                )
                            }
                        )
                    }
                </RequestsListContainer>
            </RequestsContainer>
        </div>
    )
}