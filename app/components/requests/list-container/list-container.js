import "./list-container.css"

export default function ListContainer({children}) {
    return(
        <div className="list-container">
            {children}
        </div>
    )
}