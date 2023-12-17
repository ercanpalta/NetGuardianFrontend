import "./input-field.css";

export default function InputField({children, type}) {
    return(
       
        <div className="input-field">
            <p className="text">{children}</p>
            <input className="input"  type={type}/>
        </div>
        
    )
}