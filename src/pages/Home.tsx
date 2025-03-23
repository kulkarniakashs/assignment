import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  return (
    <div className="h-screen bg-[#F7F8F9]">
        <div className="rubik-medium-28 welcome-position">
        Welcome to PopX
        </div>
        
<div className="info-home-position rubik-normal-18 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
    <button className="button-dark-purple button1-position"    onClick={()=>{navigate('/signup')}}  >
        <div className="rubik-medium-16 text-[#FFFFFF]">
        Create Account
        </div>
      </button>
        
        <button className="button-light-purple button2-position " onClick={()=>{navigate('/signin')}}>
            <div className="rubik-medium-16 text-[#1D2226]">Already Registered? Login</div>
        </button>
    
    </div>
  )
}

export default Home