import React from 'react'
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
        <div className='grid grid-cols-2 gap-3'>
          <div className='image'>
          <img src="/contact-us.jpeg" alt="contact-us"
          style={{width:"100%"}} />
          </div> 

          <div className='info mt-28'>
          <h1 className="bg-dark p-2 text-black text-center font-semibold text-[25px] py-7">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call us anytime. We are 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
          </div>
        </div>
    </Layout>
  )
}

export default Contact