import React from 'react'
import './Possibility.scss';
import  possibility  from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='Possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div>
        <p></p>
        <h2></h2>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default Possibility
