import React from 'react'
import './blogs.scss'
import {  blog01, blog02, blog03, blog04, blog05, } from '.imports.js'


const Blogs = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
       <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening, 
        We are blogging about it.</h1>
       </div>
       <div className="gpt3__blog-container_groupA">
        <Article />
      </div>
      <div className="gpt3__blog-container_groupB">
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
    </div>
  )
}

export default Blogs
