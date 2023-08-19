import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'

function HomePage() {
  return (
    <div className='homepage'>
       <HeroBanner />
       <Trending />
       <Popular />
    </div>
  )
}

export default HomePage
