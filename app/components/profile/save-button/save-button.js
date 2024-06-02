import "./save-button.css"

export default function SaveButton({handleClick}){

    return(
        <button className="save-button" onClick={handleClick}>Save Changes</button>
    )
}