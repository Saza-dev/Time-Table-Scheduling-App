import React from "react";
import bg from "../assets/img1.png"
import img2 from "../assets/img2.jpg"

function SignIn() {
  return (
    <>
    {/* background image */}
    <div  className="absolute z-0 w-full h-[1080px]">
      <img src={bg} alt="Background Image" className="w-full h-full"/>
    </div>

    <div className="flex items-center justify-center w-full h-full">
    <div className="relative z-10 rounded-[6px] bg-white w-[1000px] h-[550px] mt-[150px]">
        <div className="flex flex-row">
          {/* image in left */}
          <div className="mt-[60px]">
            <img src={img2} alt="img2" className="w-[500px] h-[490px] rounded-[6px]"/>
          </div>
          {/* blue line in mid */}
          <div className="border-[2px] border-[#0066FF] h-[250px] mt-[170px] border-rad">
          </div>

          {/* signin form */}
          <div className="ml-[70px] mt-[100px]">
            <p className="mt-[20px] text-[30px] font-[800]">Sign In</p>
            <p className="text-[10px] font-semibold">Please Sign In to continue</p>
              <form action="" className="w-[300px] mt-12">
                {/* email */}
                <div>
                <input type="text" placeholder="Email" className="w-full h-[30px] border-[2px] border-gray-300 rounded mb-4 text-center"/>
                </div>
                {/* password */}
                <div>
                <input type="password" placeholder="Password" className="w-full h-[30px] border-[2px] border-gray-300 rounded mb-4 text-center"/>
                </div>
                {/* checkbox */}
                <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-[10px] font-semibold">Keep Me Logged In</label>
                </div>
                {/* sign in */}
                <div className="w-full text-center mt-[35px] h-[30px] bg-[#0066FF] text-white rounded font-semibold">
                <button type="submit">SIGN IN</button>
                </div>
              </form> 
          </div>

          
        </div>          
    </div>
    </div>
    
    
    </>
  )
}

export default SignIn;
