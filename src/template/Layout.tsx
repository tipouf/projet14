import React from 'react'
import './Layout.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-container">
      {children}
    </div>
  )
}

export default Layout