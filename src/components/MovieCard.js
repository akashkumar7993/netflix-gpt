import React from 'react'
import { IMG_URL_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 md:w-40 mr-4">
        <img alt='movies' src={IMG_URL_CDN+ posterPath}/>
    </div>
  )
}

export default MovieCard ;