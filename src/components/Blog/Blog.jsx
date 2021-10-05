import React from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: false,
      comments: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios.get("http://localhost:3000/posts").then((json) =>
      this.setState({ posts: json.data }, () => {
        let postsList = json.data;

        postsList.map((element) => {
          this.setState({ ["style" + element.id]: "mt-4 d-none" });
        });
      })
    );

    axios
      .get("http://localhost:3000/comments")
      .then((json) => {
        let jsoni = json.data;

        jsoni.map((currentComment) => {
          let currentCommentsArray;

          if (!this.state["commentArray_" + currentComment.postId]) {
            currentCommentsArray = [currentComment];
          } else {
            currentCommentsArray = [
              currentComment,
              ...this.state["commentArray_" + currentComment.postId],
            ];
          }

          this.setState({
            ["commentArray_" + currentComment.postId]: currentCommentsArray,
          });
        });
      })
      .then(this.setState({ loading: false }));
  }

  checkEmail = (string, postId) => {
    if (!string) {
      this.setState({
        ["errorEmailField" + postId]: "Email should be provided",
      });

      return false;
    }

    if (/[a-zA-Z0-9-_.]+@[a-z]+.[a-z]{2,4}/gm.test(string)) {
      return true;
    } else {
      this.setState({
        ["errorEmailField" + postId]: "Email should be valid",
      });

      return false;
    }
  };

  checkName = (string, postId) => {
    if (!string) {
      this.setState({
        ["errorNameField" + postId]: "Name should be provided",
      });

      return false;
    }

    if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(string)) {
      return true;
    } else {
      this.setState({
        ["errorNameField" + postId]: "Name should be valid",
      });

      return false;
    }
  };

  checkContent = (string, postId) => {
    if (!string) {
      this.setState({
        ["errorContentField" + postId]: "Content should be provided",
      });

      return false;
    }
    return true;
  };

  sendComment = (e, postId) => {
    e.preventDefault();

    let emailField = this.checkEmail(
      this.state["currEmailComment" + postId],
      postId
    );
    let nameField = this.checkName(
      this.state["currNameComment" + postId],
      postId
    );
    let contentField = this.checkContent(
      this.state["currContentComment" + postId],
      postId
    );

    if (emailField && nameField && contentField) {
      let myNumber = postId;
      let newComment = {
        postId: +myNumber,
        name: this.state["currNameComment" + postId],
        email: this.state["currEmailComment" + postId],
        body: this.state["currContentComment" + postId],
      };

      let currentCommentsArray;

      if (this.state["commentArray_" + postId]) {
        currentCommentsArray = [
          newComment,
          ...this.state["commentArray_" + postId],
        ];
      } else {
        currentCommentsArray = [newComment];
      }

      this.setState({
        ["commentArray_" + postId]: currentCommentsArray,
      });
      //

      axios.post("http://localhost:3000/comments", newComment).then((res) => {
        this.setState({
          ["currNameComment" + postId]: "",
          ["currEmailComment" + postId]: "",
          ["currContentComment" + postId]: "",
          ["style" + postId]: "mt-4 d-none",
        });
      });
    }
  };

  render() {
    return (
      <div>
        <span className="homeHeaderSpan">
          <h2 className="homeHeader" style={{ marginBottom: "60px" }}>
            Blog
          </h2>
        </span>
        {!this.state.posts && (
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Skeleton
              style={{
                border: "2px solid #ebeef3",
                height: "300px",
                marginBottom: "30px",
              }}
            />
            <div
              style={{
                height: "150px",
              }}
            >
              <div>
                <Skeleton style={{ paddingTop: "15px", height: "30px" }} />
              </div>
            </div>
          </div>
        )}

        {this.state.posts &&
          this.state.posts.map((post) => {
            console.log(post);
            return (
              <div
                style={{
                  border: "2px solid #ebeef3",
                  width: "80%",
                  margin: "0 auto",
                  marginBottom: "30px",
                  paddingBottom: "20px",
                }}
              >
                <h4 style={{ textAlign: "center", paddingTop: "20px" }}>
                  {post.title}
                </h4>
                <br />
                <div className="row col-12">
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <p className="ps-3">{post.body}</p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 ">
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        borderRadius: "20px",
                        margin: "8px",
                      }}
                      src={post.img}
                      alt="blog-picture"
                    />
                  </div>
                </div>
                <h6
                  className="mb-4 pt-3 ps-2"
                  style={{ borderTop: "1px #8f9397 solid" }}
                >
                  Comments
                  {this.state["commentArray_" + post.id] ? (
                    <span>
                      {" "}
                      ({this.state["commentArray_" + post.id].length})
                    </span>
                  ) : (
                    <span> (0)</span>
                  )}
                </h6>

                {this.state["commentArray_" + post.id] && (
                  <div
                    style={{
                      paddingLeft: "8px",
                      display: "block",
                      height: "150px",
                      overflowY: "scroll",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {this.state["commentArray_" + post.id].map((comment) => {
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
                )}
                {!this.state["commentArray_" + post.id] && (

                    <p style={{ paddingLeft: "8px",
                      display: "block",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      backgroundColor: "#f0f0f0", fontSize: "14px"}}>
                      There are no comments yet... be the first one to leave a comment.
                    </p>
            
                )}
                <button
                  onClick={() => {
                    this.state["style" + post.id] === "mt-4 d-none"
                      ? this.setState({ ["style" + post.id]: "mt-4" })
                      : this.setState({ ["style" + post.id]: "mt-4 d-none" });
                  }}
                  className="btn btn-light mt-3 ms-2"
                  style={{ border: "2px solid #dadada" }}
                >
                  Add a comment
                </button>
                <form
                  className={this.state["style" + post.id]}
                  style={{
                    backgroundColor: "#e7ffc9",
                    padding: "20px 20px 20px 10px",
                    borderRadius: "10px",
                    marginTop: "30px",
                  }}
                >
                  <div class="mb-3">
                    <label for="nameInput" class="form-label">
                      Name
                    </label>
                    <input
                      value={
                        this.state["currNameComment" + post.id]
                          ? this.state["currNameComment" + post.id]
                          : ""
                      }
                      onChange={(e) =>
                        this.setState({
                          ["currNameComment" + post.id]: e.target.value,
                        })
                      }
                      type="text"
                      class="form-control"
                      id="nameInput"
                    />
                    <small style={{ color: "red" }}>
                      {this.state["errorNameField" + post.id]}
                    </small>
                  </div>

                  <div class="mb-3">
                    <label for="nameInput" class="form-label">
                      Email
                    </label>
                    <input
                      value={
                        this.state["currEmailComment" + post.id]
                          ? this.state["currEmailComment" + post.id]
                          : ""
                      }
                      onChange={(e) =>
                        this.setState({
                          ["currEmailComment" + post.id]: e.target.value,
                        })
                      }
                      type="text"
                      class="form-control"
                      id="emailInput"
                    />
                    <small style={{ color: "red" }}>
                      {this.state["errorEmailField" + post.id]}
                    </small>
                  </div>

                  <div class="mb-3">
                    <label for="contentInput" class="form-label">
                      Content
                    </label>
                    <textarea
                      onChange={(e) =>
                        this.setState({
                          ["currContentComment" + post.id]: e.target.value,
                        })
                      }
                      value={
                        this.state["currContentComment" + post.id]
                          ? this.state["currContentComment" + post.id]
                          : ""
                      }
                      rows="4"
                      type="text"
                      class="form-control"
                      id="contentInput"
                    ></textarea>
                    <small style={{ color: "red" }}>
                      {this.state["errorContentField" + post.id]}
                    </small>
                  </div>

                  <button
                    onClick={(e) => this.sendComment(e, post.id)}
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
