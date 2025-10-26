import Input from "./Input";
const Form = () =>{
    return (
        <>
          <div className="flex justify-center w-full h-screen bg-green-300 items-center ">
            <div className="bg-gray-100 ">
            <h1>Send Us A Message</h1>
            <h2>Please fill in the form Below to get in touch with us </h2>
            <div>
                <form action="">
                   <Input></Input>
                </form>
            </div>
            </div>
          </div>
      
        </>
    )
}
export default Form;