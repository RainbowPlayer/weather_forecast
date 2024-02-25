import './style.css'

const Button = ({ content, buttonClass, onClick, disabled }) => {
    return(
        <lable>
            <button onClick={onClick} className={buttonClass} disabled={disabled} >
                {content}
            </button>
        </lable>
    )
}

export default Button;