import React from "react";
import Skeleton from "react-loading-skeleton";
import axios from 'axios'

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      comments: [],
      loading: true,
      formClasses: "mt-4 d-none"
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((json) => json.splice(0, 10))
      .then((json) => this.setState({ posts: json }));

    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((json) => this.setState({ comments: json }))
      .then(this.setState({ loading: false }));
  }

    sendComment = (e, postId) => {
        e.preventDefault()
        console.log(postId)

        let myNumber = postId
        let newComment = 

        {
            "postId": +myNumber,  
            "name": this.state["currNameComment" + postId],
            "email": this.state["currEmailComment" + postId],
            "body": this.state["currContentComment" + postId]
            
        }
        
        console.log(newComment)

        axios.post("http://localhost:3000/comments", newComment)
        .then((res) => {
            console.log(res)
            this.componentDidMount()
            this.setState({
                ["currNameComment" + postId] : "",
                ["currEmailComment" + postId]: "",
                ["currContentComment" + postId] : "",
            })

        })

    }

  render() {
    return (
      <div>
        <span className="homeHeaderSpan">
          <h2 className="homeHeader" style={{ marginBottom: "60px" }}>
            Blog
          </h2>
        </span>
        {this.state.loading &&
          this.state.posts.map((post) => {
            return (
              <div style={{ width: "80%", margin: "0 auto",}}>
                <Skeleton
                  style={{
                    border: "2px solid #ebeef3",
                    height: "300px",
                    marginBottom: "30px",
                  }}
                />
                <div
                  style={{
                    paddingLeft: "8px",
                    display: "block",
                    height: "150px",
                    overflowY: "scroll",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  {this.state.comments.map((comment) => {
                    if (comment.postId === post.id)
                      return (
                        <div>
                          <Skeleton
                            style={{ paddingTop: "15px", height: "30px" }}
                          />
                        </div>
                      );
                  })}
                </div>
              </div>
            );
          })}
        {!this.state.loading !== 0 &&
          this.state.posts.map((post) => {
            return (
              <div
                style={{
                  border: "2px solid #ebeef3",
                  width: "80%",
                  margin: "0 auto",
                  marginBottom: "30px",
                  paddingBottom: "20px"
                }}
              >
                <h4 style={{ textAlign: "center", paddingTop: "20px" }}>
                  {post.title}
                </h4>
                <br />
                <p className="pb-4 ps-2">{post.body}</p>
                <h6
                  className="mb-4 pt-3 ps-2"
                  style={{ borderTop: "1px #8f9397 solid" }}
                >
                  Comments:
                </h6>
                <div
                  style={{
                    paddingLeft: "8px",
                    display: "block",
                    height: "150px",
                    overflowY: "scroll",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  {this.state.comments.map((comment) => {
                    if (comment.postId === post.id)
                      return (
                        <div
                          style={{
                            borderBottom: "1px #e64723 solid",
                            paddingTop: "15px",
                          }}
                        >
                          <span>
                            <p>
                              <span style={{ fontWeight: "600" }}>email: </span>{" "}
                              {comment.email}
                            </p>

                            <p>
                              <span style={{ fontWeight: "600" }}>name: </span>{" "}
                              {comment.name}
                            </p>
                          </span>
                          <p>{comment.body}</p>
                        </div>
                      );
                  })}
                </div>
                
                <button onClick={() => {(this.state["style"+post.id] === "mt-4 d-none" )?this.setState({["style"+post.id]: "mt-4"}):this.setState({["style"+post.id]: "mt-4 d-none"})}} className="btn btn-light mt-3 ms-2" style={{border: "2px solid #dadada"}}>Add a comment</button>
                <form
                    className={this.state["style"+post.id]?this.state["style"+post.id]:"mt-4 d-none" }
                  style={{
                    backgroundColor: "#e7ffc9",
                    padding: "20px 20px 20px 10px",
                    borderRadius: "10px",
                    marginTop: "30px"
                  }}
                >
                  <div class="mb-3">
                    <label for="nameInput" class="form-label">
                      Name
                    </label>
                    <input value={this.state["currNameComment" + post.id]?this.state["currNameComment" + post.id]: ""} onChange={(e)=> this.setState({["currNameComment" + post.id]: e.target.value}) } type="text" class="form-control" id="nameInput" />
                  </div>

                  <div class="mb-3">
                    <label for="nameInput" class="form-label">
                      Email
                    </label>
                    <input value={this.state["currEmailComment" + post.id]?this.state["currEmailComment" + post.id]: ""} onChange={(e)=> this.setState({["currEmailComment" + post.id]: e.target.value}) } type="text" class="form-control" id="emailInput" />
                  </div>

                  <div class="mb-3">
                    <label for="contentInput" class="form-label">
                      Content
                    </label>
                    <textarea
                    onChange={(e)=> this.setState({["currContentComment" + post.id]: e.target.value}) } 
                    value={this.state["currContentComment" + post.id]?this.state["currContentComment" + post.id]: ""}
                      rows="4"
                      type="text"
                      class="form-control"
                      id="contentInput"
                    ></textarea>
                  </div>

                  <button
                    onClick={(e)=>this.sendComment(e, post.id)}
                    type="submit"
                    class="btn btn-light"
                    style={{ border: "2px solid #dadada" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Blog;
