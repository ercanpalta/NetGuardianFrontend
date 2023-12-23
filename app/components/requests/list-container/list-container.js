import "./list-container.css"

export default function RequestsListContainer({children}) {
    return(
        <div className="requests-list-container">
            {children}
        </div>
    )
}