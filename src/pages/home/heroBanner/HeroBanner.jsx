import { useEffect, useState } from 'react'
import './HeroBanner.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


function HeroBanner() {

  const [background,setBackground] = useState('');
  const [query , setQuery] = useState("")
  const navigate = useNavigate()
  const {url} = useSelector((state) => state.home)

   const {data,loading} = useFetch("/movie/upcoming") 
   
   useEffect(() => {
     const backdrop = url.backdrop +  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
     setBackground(backdrop);
   },[data])

  const searchQueryHandler = (e) => {
      if(e.key === 'Enter' && query.length > 0){
             navigate(`/search/${query}`)
      }
  }
    
  return (
   <div className='heroBanner'>
       {!loading && <div className="backdrop-img">
          <Img src={background}/>
       </div>}

      <ContentWrapper>
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
      </ContentWrapper>
   </div>
  )
}

export default HeroBanner
