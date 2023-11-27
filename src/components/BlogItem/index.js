// Write your JS code here

import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {BlogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = BlogItemDetails

  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <div className="Blog-item-container">
        <div className="img-container">
          <img src={imageUrl} className="image-height" />
        </div>
        <div className="small-container">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="avtr-div">
            <img src={avatarUrl} className="avatr" />
            <p className="author-para">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
