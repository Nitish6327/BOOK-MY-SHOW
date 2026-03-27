import React from 'react'
import { moviesList } from '../data'
import Radiocomponents from './Radiocomponents' 
import '../Css/selectMovie.css'; 


const selectMovie=()=>{
  return (
    <>
    <h1 className='SM_Heading'>Select A movie :-</h1>
    <div className='SM_main_container'>


      {moviesList.map((el,index) =>  {
        return(
            <Radiocomponents text={el} key={index}/>
        )
      })}
    </div>
    </>
  )
}

export default selectMovie
