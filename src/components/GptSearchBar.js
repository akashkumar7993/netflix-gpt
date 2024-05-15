import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';
import { get } from 'firebase/database';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    
  const gptQuery = 
  "Act as a Movie Recommendations system and suggest some movies for the querry: " +
  searchText.current.value + 
  ". only give me name of 5 movies, come seperated like the example result given ahead. Example Results: Batman, Drive, RRR, Golmaal, Sholay";

  const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", contact: gptQuery}],
      model: "gpt-3.5-turbo",
    })

  };

  
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'> 
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onClick={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' 
            placeholder={lang[langKey].gptsearchPlaceholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}  > 
                {lang[langKey].search}
            </button> 
        </form>
    </div>
  ) 
}
 
export default GptSearchBar; 