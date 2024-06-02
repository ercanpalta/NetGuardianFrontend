import "./input-field.css";

export default function InputField({children, type, onChange, errorMessage, isHidden = true}) {
    return(
       
        <div className="input-field">
            <p className="text">{children}</p>
            <input className="input"  type={type} onChange={onChange}/>
            {isHidden ? null : <p className="input-error">{errorMessage}</p>}
            
        </div>
        
    )
}