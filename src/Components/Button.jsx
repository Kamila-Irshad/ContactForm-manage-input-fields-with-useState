const Button =({className, children, placeholder, onChange })=>{
    return (
        <>
        <button
        onClick={onChange}
        placeholder={placeholder}
        className={`${className}`}>{children}</button>
        </>
    )
}
export default Button;