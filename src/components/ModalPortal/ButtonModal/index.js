import "./index.css"

function ButtonModal ({text,className,onClick,disabled,type}){
    return (
        <>

        <div type={type} className={className} onClick={onClick} disabled={disabled}>{text }</div>
        </>
    )
}

export { ButtonModal}