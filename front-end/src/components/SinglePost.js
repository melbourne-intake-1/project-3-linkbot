import React from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import { getPosts, upvote, deletePost } from '../api/apiCall';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class SinglePost extends React.Component {

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
          <CardHeader titleStyle={{fontSize: 18}} titleColor="#444" showExpandableButton={true} title={this.props.currentPost.title} subtitle={`${this.props.currentPost.url} - ${this.props.currentPost.votes} votes `} avatar={this.props.currentPost.image} actAsExpander={true}  />
          <CardTitle subtitle={this.props.currentPost.body} expandable={true} style={{backgroundColor:"#efefef"}} />
          <div style={{padding: 10}}>
            <FontIcon onClick={() => this.props.upvotePost(this.props.currentPost)} style={{cursor:'pointer', fontSize: 24, marginRight: 50}} hoverColor='#43c6f9' cursor='pointer' className="material-icons">thumb_up</FontIcon>
            <FontIcon style={{cursor:'pointer', fontSize: 24, marginBottom: 20}} hoverColor='#ea2a3d' cursor='pointer' className="material-icons" onClick={() => this.props.deletePost(this.props.currentPost)}>delete_forever</FontIcon>
          </div>
        </Card>
      </div>
    )
  }
}
