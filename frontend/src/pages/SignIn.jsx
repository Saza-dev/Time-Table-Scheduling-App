import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import * as apiClient from "../api-client";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      let data = {
        user: username,
        pass: password,
      };
      const x = await apiClient.getAUser(data);
      console.log(x.data.user);
      localStorage.setItem("Role", x.data.type);
      // Add routing logic based on the user
      if (x.data.type === "admin") {
        localStorage.setItem("setID", "admin");
        navigate("/admin/admin-dashboard/dashboard");
      } else if (x.data.type === "student") {
        localStorage.setItem("setID", x.data.user.studentId);
        localStorage.setItem("batch",x.data.user.batchId)
        localStorage.setItem("fac",x.data.user.department)
        navigate("/student/dashboard");
      } else if (x.data.type === "teacher") {
        localStorage.setItem("setID", x.data.user.lecid);
        navigate("/lecturer/dashboard");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* background image */}
      <div className="absolute z-0 w-full h-[945px]">
        <img src={bg} alt="Background Image" className="w-full h-full" />
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <div className="relative z-10 rounded-[6px] bg-white w-[1000px] h-[550px] mt-[150px]">
          <div className="flex flex-row">
            {/* image on the left */}
            <div className="mt-[60px]">
              <img
                src={img2}
                alt="img2"
                className="w-[500px] h-[490px] rounded-[6px]"
              />
            </div>
            {/* blue line in the middle */}
            <div className="border-[2px] border-[#0066FF] h-[250px] mt-[170px] border-rad"></div>

            {/* sign-in form */}
            <div className="ml-[70px] mt-[100px]">
              <p className="mt-[20px] text-[30px] font-[800]">Sign In</p>
              <p className="text-[10px] font-semibold">
                Please Sign In to continue
              </p>
              <form onSubmit={handleSignIn} className="w-[300px] mt-12">
                {/* email/username */}
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full h-[30px] border-[2px] border-gray-300 rounded mb-4 text-center"
                  />
                </div>
                {/* password */}
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[30px] border-[2px] border-gray-300 rounded mb-4 text-center"
                  />
                </div>
                {/* checkbox */}
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-[10px] font-semibold">
                    Keep Me Logged In
                  </label>
                </div>
                {/* sign-in button */}
                <div className="w-full text-center mt-[35px] h-[30px] bg-[#0066FF] text-white rounded font-semibold">
                  <button type="submit">SIGN IN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
