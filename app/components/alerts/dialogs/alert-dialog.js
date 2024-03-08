import "./alert-dialog.css"

export default function AlertDialog({handleAddList, handleCancel, listName}){

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div id="alert-dialog">
            <p className="alert-dialog-title">Add to {capitalize(listName)}!</p>
            <p className="alert-dialog-message">Are you sure you want to add?</p>
            <div className="button-container">
                <button className="alert-dialog-add-button" onClick={handleAddList}>Add</button>
                <button className="alert-dialog-cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}