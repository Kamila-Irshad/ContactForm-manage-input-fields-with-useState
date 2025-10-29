const Button =({className, children, placeholder })=>{
    return (
        <>
        <button
        placeholder={placeholder}
        className={`${className}`}>{children}</button>
        </>
    )
}
export default Button;