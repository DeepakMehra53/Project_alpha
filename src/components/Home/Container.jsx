import React from 'react'
import Nav_wrap from './Nav_wrap'
import Navigation from './Navigation'
function Container() {
  return (
    <div className='container max-w-full pl-10 pr-10 w-container'>
        <Nav_wrap/>
        <Navigation/>
    </div>
  )
}

export default Container