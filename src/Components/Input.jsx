const Input = ({className,type}) =>{
    return(
        <>
        <input type={type} className={`${className} border p-4`} />
        </>
    )
}
export default Input;