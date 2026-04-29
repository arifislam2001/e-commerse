import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { Link } from 'react-router'
import { useLoginMutation } from '../services/api'

const Login = () => {
  const [login] = useLoginMutation();
  const [loginData, SetLoginData] = useState({
    username: "",
    password: "",
  });
  const handelLogin = async (e) => {
    e.prevenetDefault();
    
    const res = await login(loginData);
    if(res.error){
     console.log( res.error.data.message);
     
    }
  
    
    

  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Login</h2>
          <form onSubmit={handelLogin} className="flex flex-col gap-8">
            <Input type='text' label="username" placeholder="Enter your username"
              onChange={(e) => SetLoginData((prev) => ({ ...prev, username: e.target.value }))} 
              />

            <Input type='password' label="password" placeholder="Enter your password"
              onChange={(e) => SetLoginData((prev) => ({ ...prev, password: e.target.value }))} 
              />

            <div className="flex items-center justify-between flex-wrap">

              <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
              <p className="text-gray-900 mt-4"> Don't have an account? <Link to="/registation" className="text-sm text-blue-500 -200 hover:underline mt-4">Register</Link></p>
            </div>
            <Button type='submit'>Create Account</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
