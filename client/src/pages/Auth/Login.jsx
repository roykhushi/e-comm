import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from '../../context/auth';

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [auth,setAuth] = useAuth();


  const navigate = useNavigate();
  const location = useLocation();
  

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents reloading
    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/login`,
        { email,password }
      );
      // console.log(resp.data);
      if (resp.data.success) {
        toast.success("Login Successful!");   //toast notifications not working for some reason --> check later
        setAuth({
          ...auth,
          user : resp.data.user,
          token : resp.data.token
        })
        localStorage.setItem('auth',JSON.stringify(resp.data));
        navigate(location.state || "/");
      } else {
        toast.error(resp.data.message);
      }
    } catch (error) {
      console.log(`Error in registering`, error);
      toast.error("Something went wrong");
    }
  };
  // console.log(import.meta.env.VITE_API_KEY);
  return (
    <Layout>
      <div className="login">
        <h1 className="mb-12 font-semibold text-[25px] m-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Login with your credentials
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={visible ? "text" : "password"}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="btn">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;



