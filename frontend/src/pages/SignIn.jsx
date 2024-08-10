import React from "react";
import bg from "../assets/img1.png"
import img2 from "../assets/img2.jpg"

function SignIn() {
  return (
    <>
    {/* background image */}
    <div  className="absolute z-0 w-full h-[599px]">
      <img src={bg} alt="Background Image" className="w-full h-full"/>
    </div>

    <div className="flex items-center justify-center w-full h-full">
    <div className="relative z-10 rounded-[6px] bg-white w-[800px] h-[400px] mt-[100px]">
        <div className="flex flex-row">
          {/* image in left */}
          <div>
            <img src={img2} alt="img2" className="w-[400px] h-[400px] rounded-[6px]"/>
          </div>
          {/* blue line in mid */}
          <div className="border-[2px] border-[#0066FF] h-[250px] mt-[70px] border-rad">
          </div>

          {/* signin form */}
          <div className="ml-[40px]">
            <p className="mt-[40px] text-[24px] font-[800]">Sign In</p>
            <p className="text-[10px]">Please Sign In to continue</p>
              <form action="" className="w-[300px] mt-10">
                {/* email */}
                <div>
                <input type="text" placeholder="Email" className="w-full h-[30px] border-[1px] rounded mb-4 text-center"/>
                </div>
                {/* password */}
                <div>
                <input type="password" placeholder="Password" className="w-full h-[30px] border-[1px] rounded mb-4 text-center"/>
                </div>
                {/* checkbox */}
                <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-[10px]">Keep Me Logged In</label>
                </div>
                {/* sign in */}
                <div className="w-full text-center mt-[35px] h-[30px] bg-[#0066FF] text-white rounded">
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
