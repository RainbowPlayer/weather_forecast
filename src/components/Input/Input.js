const Input = ({ type, id, className, name, required, min, max, onChange, placeholder }) => {
    return(
        <input type={type} id={id} className={className} name={name} required={required} min={min} max={max} onChange={onChange} placeholder={placeholder} />
    )
}

export default Input;