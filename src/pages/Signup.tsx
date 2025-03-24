import InputWithLabel from "../components/InputWithLabel"
import { useNavigate } from "react-router-dom"
function Signup() {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen flex justify-center bg-[#FFFFFF]">
        <div className='w-[375px] h-full pl-5 pt-10 bg-[#F7F8F9] relative'>
            <div className="rubik-medium-28 w-[188px] h-[69px]">
                Create your PopX account
            </div>
            <InputWithLabel placeholder="Marry Doe" label="Full Name" type="text" classes="mt-6 " req={true} />
            <InputWithLabel placeholder="Marry Doe" label="Phone Number" type="text" classes="mt-5 " req={true} />
            <InputWithLabel placeholder="Marry Doe" label="Email Address" type="text" classes="mt-5 " req={true} />
            <InputWithLabel placeholder="Marry Doe" label="Password" type="text" classes="mt-5" req={true} />
            <InputWithLabel placeholder="Marry Doe" label="Company Name" type="text" classes="mt-5" />
            <div className="input-label-text mt-4 required " style={{color : 'black'}}>
                Are you an Agency?
            </div>
            <div className="mt-1.5">
                <input type="radio" name="choice" id="yes" value={"yes"} checked />
                <label htmlFor="yes" className="ml-3 mr-6 radio-text-14px">Yes</label>
                <input type="radio" name="choice" id="no" value={"no"} />
                <label htmlFor="no" className="ml-3 mr-6 radio-text-14px ">No</label>
            </div>
        <button onClick={()=>{navigate('/profile')}} className="button-dark-purple absolute bottom-8 w-[335px] h-[46px] flex justify-center items-center rubik-medium-16 text-[#FFFFFF]">
           Create Account
        </button>
        </div>
        </div>
    )
}

export default Signup