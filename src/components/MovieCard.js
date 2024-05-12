import React from 'react'
import { IMG_URL_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img alt='movies' src={IMG_URL_CDN+ posterPath}/>
    </div>
  )
}

export default MovieCard 