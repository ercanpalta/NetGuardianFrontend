import "./list-container.css"

export default function WBListContainer({children}) {
    return(
        <div className="wb-list-container">
            {children}
        </div>
    )
}