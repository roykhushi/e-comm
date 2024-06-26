import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout>
        <div className="pnf flex min-h-[65vh] flex-col mt-[20px]">
          <h1 className="pnf-title text-[100px] font-semibold">404</h1>
          <h2 className="pnf-err text-[40px] font-normal">Oops! Page Not Found</h2>
          <Link to="/" className="pnf-btn">
            Go Back
          </Link>
        </div>
    </Layout>
  )
}

export default PageNotFound