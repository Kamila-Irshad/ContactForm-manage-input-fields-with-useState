const Input = ({className,type,ref}) =>{
    return(
        <>
        <input 
        ref={ref}
        type={type} className={`${className}  p-4 rounded shadow-xl/30`} />
        </>
    )
}
export default Input;