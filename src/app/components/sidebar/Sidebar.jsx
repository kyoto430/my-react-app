import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/5453900/pexels-photo-5453900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ruslan Prakapets</h2>
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Lorem ipsum dolor sit.</p>
          <p className="sidebar__statNumber">9999</p>
        </div>
        <div className="sidebar__stat">
          <p>Lorem ipsum dolor sit.</p>
          <p className="sidebar__statNumber">7777</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('programming')}
        {recentItems('developer')}
      </div>
    </div>
  )
}

export default Sidebar
