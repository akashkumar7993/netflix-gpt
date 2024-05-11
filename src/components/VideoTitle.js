import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1> 
      <p className='py-6 text-lg w-2/4'>{overview}</p>
      <div>
        <botton className="bg-white text-black p-3 px-12 text-xl rounded-lg cursor-pointer hover:bg-opacity-80">Play</botton>
        <button className="bg-gray-400 text-white p-3 mx-2 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;