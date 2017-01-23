import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { getPosts, upvote, deletePost } from '../api/apiCall';
import Comment from './Comment';
import {red500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';


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
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader title={this.props.currentPost.title} subtitle={`${this.props.currentPost.url} - ${this.props.currentPost.votes} votes `} avatar={this.props.currentPost.image} actAsExpander={true}  />
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
            <FontIcon style={{cursor:'pointer', marginRight: 50, fontSize: 36}} onClick={() => this.props.upvotePost(this.props.currentPost)} className="material-icons" color={red500}>favorite_border</FontIcon>
            <FontIcon style={{cursor:'pointer', marginRight: 50, fontSize: 36}} cursor='pointer' className="material-icons" onClick={() => this.props.deletePost(this.props.currentPost)}>delete_forever</FontIcon>
          </div>
        </Card>
      </div>
    )
  }
}

export default SinglePost;
