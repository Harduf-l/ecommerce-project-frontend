import React from 'react'


class Blog extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            comments: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then (json => json.splice(0, 10))
        .then (json => this.setState({posts: json}))


        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then (json => this.setState({comments: json}))
    }



  render() {

    return(
        <div>
           <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Blog</h2></span>
           {this.state.posts.length !== 0 && this.state.posts.map((post) => {
               return <div style={{border: "2px solid #ebeef3", width: "80%", margin: "0 auto", marginBottom: "30px"}}>
                   <h4 style={{textAlign: "center", paddingTop: "20px"}}>{post.title}</h4>
                   <br/>
                   <p className="pb-4 ps-2">{post.body}</p>
                   <h6 className="mb-4 pt-3 ps-2" style={{borderTop: "1px #8f9397 solid"}}>Comments:</h6>

                    <div style={{paddingLeft: "8px", display: "block", height: "150px", overflowY: "scroll", backgroundColor: "#f0f0f0"}}>
                   {this.state.comments.map((comment) => {
                       if (comment.postId === post.id) 
                       return (
                       <div style={{borderBottom: "1px #e64723 solid", paddingTop: "15px"}}>
                       <span><p><span style={{fontWeight: "600"}}>email: </span> {comment.email}</p>
                       
                       <p><span style={{fontWeight: "600"}}>name: </span> {comment.name}</p></span>
                       <p>{comment.body}</p>
                       </div>
                       )
                   })}
                   </div>


                    </div>
           })}
        </div>

    )
  }
}

export default Blog