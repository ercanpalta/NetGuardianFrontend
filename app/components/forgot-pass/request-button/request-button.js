import "./request-button.css"

export default function  RequestButton({handleClick}) {
    return (
      <button id="request-button" onClick={handleClick}>
        <p id="request-b-txt">Send Request</p>
      </button>
    )
  }