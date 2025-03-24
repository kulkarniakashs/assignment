import InputWithLabel from "../components/InputWithLabel"
import { useNavigate } from "react-router-dom"
function Signin() {
    const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex justify-center bg-[#FFFFFF]">
    <div className="w-[375px] pl-5 pt-10 h-screen box-border bg-[#F7F8F9]">
        <div className="rubik-medium-28 w-[188px] h-[69px]">Signin to your PopX account</div>
        <div className="mt-3.5 rubik-normal-18 opacity-60 w-[232px] h-[48px] mb-[33px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
        <InputWithLabel placeholder="Enter email address" type="text" label="Email Address"/>
        <InputWithLabel placeholder="Enter password" type="text" label="Password" classes="mt-6" />
        <button onClick={()=>{navigate('/profile')}}><div className="login-button rubik-medium-16 text-[#FFFFFF] flex justify-center items-center">Login</div></button>
    </div>
    </div>
  )
}

export default Signin