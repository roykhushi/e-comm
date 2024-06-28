import React,{useState} from "react";
// import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import Layout from "../../components/Layout/Layout";
import {toast} from "react-toastify";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    
    const[name, setName] = useState("");
    // const[lastName, setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[visible,setVisible] = useState(false);
    const[address,setAddress] = useState("");
    const[phone,setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault(); //prevents reloading
        try {

          const resp = await axios.post(`${import.meta.env.VITE_API}/api/v1/auth/register`, {name,password,email,phone,address}); 
          // console.log(resp.data);
          if(resp.data.success){
            toast.success("User registered successfully!");
            navigate("/login");
          }
          else{
            toast.error(resp.data.message);
          }
        }
        catch (error) {
          console.log(`Error in registering`, error);
          toast.error("Something went wrong");
        }
    }
  // console.log(import.meta.env.VITE_API_KEY);
  return (
    <Layout>
      <div className="register">
        <h1 className="mb-12 font-semibold text-[25px]">Register</h1>
        <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-4">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            {/* <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // required
                />
              </div>
            </div> */}
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type={visible ? "text" : "password"}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // required
                />
            </div>
            
            </div>
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
                  onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // required
                />
              </div>
            </div>
            
            
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // required
                />
              </div>
            </div>
            
            <div>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
            
            
          </div>
        </div>
      
      </form>
      </div>
    </Layout>
  );
};

export default Register;



//Vite--> import.meta.env_something works and not process.env--> bruh gave me a hard time 😞