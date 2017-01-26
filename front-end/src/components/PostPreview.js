import React from 'react';
import {Card, CardText} from 'material-ui/Card';

class PostPreview extends React.Component {
  render() {
    return (
      <Card style={{backgroundColor: '#d7dee8'}}>
          <CardText style={{fontWeight: 'bold', textDecoration: "underline"}}>Post Preview</CardText>
          <CardText style={{fontWeight: 'bold'}}>{this.props.title}</CardText>
          <CardText>{this.props.body}</CardText>
          <CardText>{this.props.url}</CardText>
      </Card>
    );
  }
}

export default PostPreview;
