import React from 'react'
import './features.scss'
import { Feature } from '../../Components'


export default function features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h2 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
        <p>Request Early Access to Get Started</p>
      </div>
        <div className="gpt3__features-container">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
    </div>
  )
}

