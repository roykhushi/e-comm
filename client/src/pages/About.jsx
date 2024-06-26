import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
       
        <div className='grid grid-cols-2 gap-3'>
          <div className='image'>
          <img src="/about-us.jpeg" alt="about-us"
          style={{width:"100%"}} />
          </div> 

          <div className='info mt-40'>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia provident sed, neque error nesciunt vel ut ipsa autem libero facere quam molestias consequuntur. Perspiciatis, facere? Excepturi molestiae animi cum.
            </p>
          </div>
        </div>
        

    </Layout>
  )
}

export default About