// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {ComponentList: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({ComponentList: updatedData, isLoading: false})
  }

  renderMethod = () => {
    const {ComponentList} = this.state
    return ComponentList.map(each => (
      <BlogItem key={each.id} BlogItemDetails={each} />
    ))
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            data-testid="loader"
          />
        ) : (
          this.renderMethod()
        )}
      </div>
    )
  }
}
export default BlogList
