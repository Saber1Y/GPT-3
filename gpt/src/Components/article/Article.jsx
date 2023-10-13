import React from 'react'
import './article.scss';


const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blof-container_article'>
     <div className="gtp3__blog-container_artcile-image">
      <img src={imgUrl} />
     </div>
    </div>
  )
}

export default Article

