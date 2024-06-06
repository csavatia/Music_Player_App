import React from 'react'
import './SideBarButton.css'
import { IconContext } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'

const SideBarButton = ({ to, title, icon }) => {
  const location = useLocation()
  const isActive = location.pathname === to
  const btnClass = isActive ? 'btn-body active' : 'btn-body'
  return (
    <Link to={to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: '24px', className: 'btn-icon' }}>
          {icon}
          <p className='btn-title'>{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}

export default SideBarButton
