import React, { Component } from "react"
import "./sidebar.css"

const Sidebar = (props) => {
  let drawerClasses = 'sidebar'
  if (props.show) {
    drawerClasses = 'sidebar open'
  }


    return (
      <>
        <div className={drawerClasses}>
          <div
            onClick={() => props.handleNavigation(2)}
            className="sidebar-detail"
          >
            Dashboard
          </div>
        </div>
      </>
    )
  
}
export default Sidebar
