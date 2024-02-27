const Button = ({ content, className, onClick, disabled }) => {
    return(
        <lable>
            <button onClick={onClick} className={className} disabled={disabled} >
                {content}
            </button>
        </lable>
    )
}

export default Button;