import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'

function HomePage() {
  return (
    <div className='homepage'>
       <HeroBanner />
       <Trending />
       <div style={{height: 500}}></div>
    </div>
  )
}

export default HomePage
