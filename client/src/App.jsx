import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';

import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import { Private } from './components/routes/Private';
import { AdminRoute } from './components/routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';


function App() {
  

  return (
    <>
    <Routes>
    
      <Route path='/' element = {<HomePage />} />
      <Route path='/dashboard' element = {<Private/>}>
        <Route path='' element = {<Dashboard />} />
      </Route>
      <Route path='/dashboard' element = {<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard />} />
      </Route>
      <Route path='/register' element = {<Register />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/policy' element = {<Policy />} />
      <Route path='/*' element = {<PageNotFound />} />
      
    </Routes>
    
    </>
  )
}

export default App




//seo -- later