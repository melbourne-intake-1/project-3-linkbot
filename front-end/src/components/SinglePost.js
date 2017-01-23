import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { getPosts, getPost, upvote, deletePost } from '../api/apiCall';
import Comment from './Comment';

class SinglePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
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
        
      })
    // this.props.populatePosts()
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <div>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} >
            <CardHeader title={this.props.currentPost.title} subtitle={this.props.currentPost.url} avatar={this.props.currentPost.image} actAsExpander={true}  />
              <CardText style={{float:'left', marginBottom: 20}}>
                <Toggle toggled={this.state.expanded} onToggle={this.handleToggle} />
              </CardText>
            <CardTitle subtitle={this.props.currentPost.body} expandable={true} />
            <CardText expandable={true} >
              <CardActions>
                {
                  this.props.currentPost._comments.map((comment) => {
                    return (
                      <Comment commentContent={comment.content} commentID={comment._id} />
                    )
                  })
                }
              </CardActions>
            </CardText>
            <div style={{padding: 20}}>
              <FlatButton label={`${this.props.currentPost._comments.length} Comments`} />

              <FlatButton label="date" />
              <FlatButton label="Delete" secondary={true} onClick={() => this.deletePost(this.props.currentPost)}/>
            </div>
          </Card>
      </div>
    )
  }
}

export default SinglePost;
