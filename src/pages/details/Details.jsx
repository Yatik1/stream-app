import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';

const Details = () => {

  // const {data,loading} = useFetch();
  // const {mediaType,id} = useParams();

  return (
    <div>
       <DetailsBanner />
    </div>
  )
}

export default Details

