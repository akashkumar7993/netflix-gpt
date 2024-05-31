import React from 'react'
import { IMG_URL_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-40 md:w-40 pr-4">
        <img alt='movies' src={IMG_URL_CDN+ posterPath}/>
    </div>
  )
}

export default MovieCard ;