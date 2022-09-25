import React, { Component } from 'react'
import axios from 'axios'

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount() {
        axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8')
        .then(response =>{
            console.log(response)
            this.setState({post: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const {posts} = this.state
    return (
      <div>
        GetList
        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            null
        }
      </div>
    )
  }
}

export default GetList