import React from 'react'
import '../Css/radiocomponents.css'

const Radiocomponents = ({text}) => {
  return (
    <div>
        <div className='form-check-label'></div>
      <span className='text'>{text}</span>
    </div>
  )
}

export default Radiocomponents;
