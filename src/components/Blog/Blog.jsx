import React from 'react'

class Blog extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then (json => this.setState({posts: json}))
        .then(console.log(this.state.posts))
    }

  render() {

    return(
        <div>
           <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Blog</h2></span>
           {this.state.posts.length !== 0 && this.state.posts.map((post) => {
               return <div style={{border: "2px solid #ebeef3", width: "80%", margin: "0 auto", marginBottom: "20px"}}><h4 style={{textAlign: "center"}}>{post.title}</h4><br/><p>{post.body}</p></div>
           })}
        </div>
    )
  }
}

export default Blog