import React, { useState } from 'react'
import './HeroBanner.scss'
import { useNavigate } from 'react-router-dom';

function HeroBanner() {

  const [background,setBackground] = useState("");
  const [query , setQuery] = useState("")
  const navigate = useNavigate()

  const searchQueryHandler = (e) => {
      if(e.key === 'Enter' && query.length > 0){
             navigate(`/search/${query}`)
      }
  }
    
  return (
    <div className='heroBanner'>
       <div className="wrapper">
          <div className="heroBannerContent">
             <span className="title">
                 Welcome
             </span>
             <span className="subTitle">
                 Millions of movies,TV and shows and people to discover.
                 Explore Now !!
             </span>

             <div className="searchInput">
                <input 
                   type='text'
                   placeholder='Search for movie or tv show ..' 
                   onChange={(e) => setQuery(e.target.value)}
                   onKeyUp={searchQueryHandler}
                   />
                <button>Search</button>
             </div>
          </div>
       </div>
    </div>
  )
}

export default HeroBanner
