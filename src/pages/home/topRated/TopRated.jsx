import React, { useState } from 'react'
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTab from '../../../components/switchTab/SwitchTab';
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel/Carousel';

import "./top.scss"

const TopRated = () => {
  
  const [endpoint,setEndpoint] = useState("movie")
 
  const {data , loading} = useFetch( `/${endpoint}/top_rated` ) 
  const onTabChange = (tab) => {
    setEndpoint( tab === "Movies" ? "movie" : "tv")
  };

  return (
     <div className="carouselSection">
       <ContentWrapper>
         <span className="carouselTitle">
            Top Rated
         </span>
         <SwitchTab data={["Movies" , "Tv Shows"]} onTabChange={onTabChange}/>
       </ContentWrapper>

       <Carousel 
           endpoint={endpoint} data={data?.results} loading={loading}/>
     </div>
  )
}

export default TopRated