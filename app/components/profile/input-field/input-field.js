import "./input-field.css";

export default function InputField({children, type, onChange, value = null, errorMessage, isHidden = true}) {
    return(
       
        <div className="input-field">
            <p className="text">{children}</p>
            <input className="input"  type={type} onChange={onChange} value={value}/>
            {isHidden ? null : <p className="input-error">{errorMessage}</p>}
            
        </div>
        
    )
}