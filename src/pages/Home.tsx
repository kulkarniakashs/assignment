import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-screen bg-[#FFFFFF] flex justify-center">
      <div className="w-[375px] relative bg-[#F7F8F9] h-screen pl-5 flex flex-col justify-end">
        <div className="rubik-medium-28 mb-2.5">
          Welcome to PopX
        </div>

        <div className="rubik-normal-18 opacity-60 mb-[29px] w-[232px] h-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
        <button className="button-dark-purple button1-position mb-2.5" onClick={() => { navigate('/signup') }}  >
          <div className="rubik-medium-16 text-[#FFFFFF]">
            Create Account
          </div>
        </button>

        <button className="button-light-purple mb-10 button2-position" onClick={() => { navigate('/signin') }}>
          <div className="rubik-medium-16 text-[#1D2226]">Already Registered? Login</div>
        </button>
      </div>
    </div>
  )
}

export default Home