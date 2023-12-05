import React from 'react'
import Sidenav from './Sidenav'
import MiddleContent from './MiddleContent'
import RightSideNav from './RightSideNav'

const Home = () => {
  return (
    <div className='home'>

        <div className='leftsideNav'>
            <Sidenav />
        </div>
        <div className='middle'>
            <MiddleContent />
        </div>
        <div className='rightsideNav'>
            <RightSideNav />
        </div>
    
    </div>
  )
}

export default Home