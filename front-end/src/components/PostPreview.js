import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class PostPreview extends React.Component {
  render() {
    return (
      <Card style={{backgroundColor: '#abf791'}}>
          <CardText style={{fontWeight: 'bold'}}>{this.props.title}</CardText>
          <CardText>{this.props.body}</CardText>
          <CardText>{this.props.url}</CardText>
          {/* <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText> */}
      </Card>
    );
  }
}

export default PostPreview;
