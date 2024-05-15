import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-6xl font-bold'>{title}</h1> 
      <p className='hidden md:inline-block py-6 text-lg w-2/4'>{overview}</p>
      <div className='my-3 md:my-0'>
        <botton className="bg-gray-500 text-white font-bold py-1 px-5 md:p-3 md:px-12 text-xl rounded-lg cursor-pointer hover:bg-opacity-60">
        ▶️Play
        </botton>
        <button className="hidden md:inline-block bg-gray-400 text-white font-bold p-3 mx-2 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-60">
          + More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;