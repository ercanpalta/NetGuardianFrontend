import "./send-button.css"

export default function  SendButton({handleVerification}) {
    return (
      <button id="send-button" onClick={handleVerification}>
        <p id="send-b-txt">Verify</p>
      </button>
    )
  }