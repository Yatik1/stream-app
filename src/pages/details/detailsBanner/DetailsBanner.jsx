import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Rating from "../../../components/rating/Rating"
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/VideoPopup";

import "./detailsbanner.scss"

const DetailsBanner = ({vedio,crew}) => {

  const {mediaType,id} = useParams();
  const {data,loading} = useFetch(`/${mediaType}/${id}`);

  const {url} = useSelector((state) => state.home)

  const _genres = data?.genres?.map((g) => g.id)

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes / 60;
    return `${hours}h${minutes > 0 ? `${minutes}m` : "" }`
  }

  return (
    <div className="detailsBanner">
        {!loading ? (
            <>
             {!!data && (
              <React.Fragment>
                  <div className="backdrop-img">
                      <Img src={url.backdrop + data.backdrop_path} />
                  </div> 
                  <div className="opacity-layer"></div>
                  <ContentWrapper>
                    <div className="content">
                        <div className="left">
                          {data.poster_path ? (
                            <Img className='posterImg' src={url.backdrop + data.poster_path} />
                          ) : (
                            <Img className='posterImg' src={PosterFallback} />
                          )}
                     </div>
                     <div className="right">
                          <div className="title">
                               {`${
                                   data.name || data.title
                               } (${dayjs(
                                   data?.release_date
                               ).format("YYYY")})`}
                           </div>
                           <div className="subtitle">
                               {data.tagline}
                          </div>

                          <Genres data={_genres}/>

                          <div className="row">
                            <Rating rating={data.vote_average.toFixed(1)} />
                            <div className="playbtn">
                              <PlayIcon />
                              <span className='text'>Watch Trailer</span>
                            </div>
                          </div>
                     </div>
                    </div>
                  </ContentWrapper>
              </React.Fragment>
            )}
            </>
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
