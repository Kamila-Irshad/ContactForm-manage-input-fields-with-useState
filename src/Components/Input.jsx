const Input = ({className,type}) =>{
    return(
        <>
        <input type={type} className={`${className}  p-4 rounded shadow-xl/30`} />
        </>
    )
}
export default Input;