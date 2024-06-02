import "./remove-dialog.css"

export default function RemoveDialog({handleRemove, handleCancel}){

    return(
        <div id="remove-dialog">
            <p className="remove-dialog-title">Remove!</p>
            <p className="remove-dialog-message">Are you sure you want to remove?</p>
            <div className="button-container">
                <button className="remove-dialog-remove-button" onClick={handleRemove}>Remove</button>
                <button className="remove-dialog-cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}