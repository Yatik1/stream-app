import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

function HomePage() {
  return (
    <div className='homepage'>
       <HeroBanner />
       <Trending />
       <Popular />
       <TopRated />
    </div>
  )
}

export default HomePage
