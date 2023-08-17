import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./carousel.scss"

const Carousel = ({data,loading}) => { 

  const carouselContainer = useRef()
  const {url} = useSelector((state) => state.home)
  const navigate = useNavigate()
    
  const navigation = (dir) => {
    
  }

  return (
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill 
                className="carouselLeftNav arrow" 
                onClick={() => navigation("left")} 
            />

            <BsFillArrowRightCircleFill 
                className="carouselRighttNav arrow"
                onClick={() => navigation("right")}/>
        </ContentWrapper>
    </div>
  )
}

export default Carousel
