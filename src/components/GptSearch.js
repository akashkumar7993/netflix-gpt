import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute inset-0 -z-10">
        <img className="object-cover w-full h-full" alt='logo' src={BG_URL}/>
        </div>
        <div className='pt-[30%] md:p-0'>
        <GptSearchBar />
        <GptMovieSuggestions />
        </div>
    </div>
  )
};

export default GptSearch;