import React from 'react'
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import dayjs from "dayjs";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
// import Genres from "../../../components/genres/Genres";
// import CircleRating from "../../../components/circleRating/CircleRating";
// import Img from "../../../components/lazyLoadImage/Img.jsx";
// import PosterFallback from "../../../assets/no-poster.png";
// import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/VideoPopup";

import "./detailsbanner.scss"

const DetailsBanner = ({vedio,crew}) => {

  const {mediaType,id} = useParams();
  const {data,loading} = useFetch(`/${mediaType}/${id}`);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes / 60;
    return `${hours}h${minutes > 0 ? `${minutes}m` : "" }`
  }

  return (
    <div className="detailsBanner">
        {!loading ? (
             <div>Details Content .... </div>
        ):
        (
            <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
        )}
    </div>
  )
}

export default DetailsBanner
