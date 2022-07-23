import React from 'react'
import './Sidebar.css'
import { ManSharp, AccountBalance, FmdGoodSharp } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        <ul className='sidebaritems'>
          <li><span className='sidebaricon'><ManSharp /></span><span className='sidebarname'>customer</span></li>
          <li><span className='sidebaricon'><ManSharp /></span><span className='sidebarname'>Supplier</span></li>
          <li><span className='sidebaricon'><ManSharp /></span><span className='sidebarname'>Ledger</span></li>
          <li><span className='sidebaricon'><ManSharp /></span><span className='sidebarname'>Item type</span></li>
          <li><span className='sidebaricon'><FmdGoodSharp /></span><span className='sidebarname'>Item Name</span></li>
          <li><span className='sidebaricon'><AccountBalance /></span><span className='sidebarname'>Stock Opening</span></li>
          <li><span className='sidebaricon'><AccountBalance /></span><span className='sidebarname'>Bank Account</span></li>
          <li><span className='sidebaricon'><AccountBalance /></span><span className='sidebarname'>Loan/Advances</span></li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar;