import React from "react";
import { useState } from "react";
const Login = ({handlelogin}) => {
  // states
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  // functions
  const submitHandler=(e)=>{
    e.preventDefault();
    handlelogin(user,password);
    setUser("");
    setPassword("");
  }
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3131634/pexels-photo-3131634.jpeg')",
      }}
    >
      {/* Glass Effect Card */}
      <div
        className="w-130 h-100 rounded-3xl backdrop-blur-xl bg-white/10 border hover:scale-115 hover:transition-all
hover:duration-500 hover:rounded-3xl hover:shadow-4xl p-8"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-7">
          Login
        </h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col gap-9">
          <input
            type="text"
            required
            id="uname"
            name="uname"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            placeholder="Enter Username"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white outline-none border border-white/30 focus:border-blue-400 focus:bg-white/25 transition-all"
          />
          <input
            type="password"
            id="password"
            required
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white outline-none border border-white/30 focus:border-blue-400 focus:bg-white/25 transition-all"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
