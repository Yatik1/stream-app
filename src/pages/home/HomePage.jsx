import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'

function HomePage() {
  return (
    <div className='homepage'>
       <HeroBanner />
       <div style={{height: 500}}></div>
    </div>
  )
}

export default HomePage
