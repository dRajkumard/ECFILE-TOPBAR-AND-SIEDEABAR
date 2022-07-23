import React from 'react'
import { Notifications,Home,ArrowDropDown } from '@mui/icons-material'
import logo from '../../assets/images/logo.jpg'
import './Topbar.css'

const Topbar = () => {
  return (
   
    <div className='topcontainer'>
      <div className='topbar'>
       
        <ul className='left-topbar'>
          
          <li>
          <div className="logo"><img src={logo} /></div></li>
          <li className='logoname'>ECGST</li>
        </ul>
        <ul className='right-topbar'>
          <li><Notifications/></li>
          <li><div className='border'></div></li>
          <li><Home/></li>
          
          <li><div className='border'></div></li>
          <li><span>Welcome</span><br/><span>Sam</span><span className='arrowicon'><ArrowDropDown/></span></li>
          <li></li>
        </ul>
      </div>
      <div className='bottombar'>
        <ul>
          <li>CREATE</li>
          <li>INVOICES</li>
          <li>ESTIMATES</li>
          <li>INCOME</li>
          <li>VOUCHERS</li>
          <li>CASH/BANK</li>
          <li>PAYROLL</li>
         
        </ul>
      </div>
    </div>
 
  )
}

export default Topbar