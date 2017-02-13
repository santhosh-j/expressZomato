import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Card, Icon, Image} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class ButtonComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (

        <Button style={{'text-align':'center'}} size='massive' onClick={this.props.click} attached={this.props.attached} size='large' color={this.props.color} >
          <Icon name={this.props.iconName}></Icon>{this.props.name}
        </Button>


    );
  }
}
module.exports = ButtonComponent;
