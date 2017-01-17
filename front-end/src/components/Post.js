import React from 'react'
import { getPosts, getPost, upvote, deletePost } from '../api/apiCall'
import Form from './Form'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      stuff: 'stuff'
    }
    this.populatePosts = this.populatePosts.bind(this)
    this.upvotePost = this.upvotePost.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentDidMount() {
    this.populatePosts()
  }

  upvotePost(post) {
    upvote(post._id)
      .then(response => {
        console.log(response.data)
        this.populatePosts()
      })

  }

  populatePosts() {
    getPosts()
      .then(response => {
        console.log('in pop posts', response.data)
        this.setState({ posts: response.data })
      })
  }

  deletePost(post) {
    deletePost(post._id)
      .then(response => {
        console.log(response.data)
        this.populatePosts()
      })
  }

  render() {
    return (
      <div>
        { this.state.posts.map((post) => {
          return (

            <Card>
                <CardHeader
                  title={post.title}
                  subtitle={post.url}
                />
                <CardActions>
                  <FlatButton label="x comments" />
                  <FlatButton label="username" />
                  <FlatButton label="date" />
                  <p><a href="#" onClick={() => this.deletePost(post)}>Delete Post</a></p>
                </CardActions>
                {/* <CardText expandable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText> */}
            </Card>

            /* <div key={post._id} className="post">
              <p><a href={post.url}> {post.title}</a></p>
              <p>{post.body}</p>
              <p>Votes: {post.votes} <button onClick={() => this.upvotePost(post)}>Upvote</button></p>
              <p><a href="#" onClick={() => this.deletePost(post)}>Delete Post</a></p>
              <hr/>
            </div> */
          )
        })}
        <Form populatePosts={this.populatePosts} />
      </div>
    );
  }
}

export default Post;
