import Main from './Main'
import React from 'react'
import SideMenu from './SideMenu'

const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
        <SideMenu />
        <Main />
    </div>
  )
}

export default Layout