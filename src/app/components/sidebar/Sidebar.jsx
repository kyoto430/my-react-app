import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ruslan Prakapets</h2>
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Wiew</p>
          <p className="sidebar__statNumber">9999</p>
        </div>
        <div className="sidebar__stat">
          <p>Posts</p>
          <p className="sidebar__statNumber">7777</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar
