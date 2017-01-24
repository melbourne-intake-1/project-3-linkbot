import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { getPosts, upvote, deletePost } from '../api/apiCall';
import Comment from './Comment';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


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
          <CardHeader showExpandableButton={true} title={this.props.currentPost.title} subtitle={`${this.props.currentPost.url} - ${this.props.currentPost.votes} votes `} avatar={this.props.currentPost.image} actAsExpander={true}  />

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
          <div style={{marginRight: 60, padding: 10}}>
            <FloatingActionButton mini={true} onClick={() => this.props.upvotePost(this.props.currentPost)} style={{cursor:'pointer', marginRight:50}}>
              <ContentAdd />
            </FloatingActionButton>
            <FontIcon style={{cursor:'pointer', fontSize: 36}} cursor='pointer' className="material-icons" onClick={() => this.props.deletePost(this.props.currentPost)}>delete_forever</FontIcon>
          </div>
        </Card>
      </div>
    )
  }
}

export default SinglePost;
