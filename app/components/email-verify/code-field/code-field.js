import "./code-field.css";

export default function CodeField({type, handleCodeInput}) {
    return(
       
        <div className="code-field">
            <input className="code-input"  type={type} onChange={handleCodeInput} maxLength="6"/>
        </div>
        
    )
}