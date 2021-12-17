import React from 'react'
import './App.css'
import Feed from './app/components/feed/Feed'
import Header from './app/components/header/Header'
import Sidebar from './app/components/sidebar/Sidebar'

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  )
}

export default App
