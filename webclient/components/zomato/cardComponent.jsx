import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Card, Icon, Image} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import ButtonComponent from './buttonComponent.jsx'

class CardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonName: 'Add to favorite',
      buttonColor: 'green',
      updateButtonColor: 'green',
      comments: '',
      deleteButton: 'Delete',
      updateButton: 'Update'
    }
  }
  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    });
  }
  addRestaurant(){
    $.ajax({
        type: 'POST',
        url: '/restaurant/addRestaurant',
        data: {
            'name': this.props.name,
            'address': this.props.address,
            'cuisines': this.props.cuisines,
            'ratings':this.props.ratings,
            'costForTwo': this.props.costForTwo,
            'image':this.props.image,
            'comments': this.state.comments
        },
        success: function(msg){
            this.setState({buttonName:'Added to Your Favourites',buttonColor:'red'});
        }.bind(this)
    });
  }
  updateRestaurant() {
    let id = this.props.id;
    let comments = this.state.comments;
    $.ajax({
        type: 'PATCH',
        url: `/restaurant/updateRestaurant/${id}`,
        data: {
            'comments': comments
        },
        success: function(msg){
            //this.setState({updateButtonColor:'red', updateButton: 'Updated'});
            this.update(id,comments);
        }.bind(this)
    });
    this.setState({
      comments: ''
    });
  }
  update(id, comments) {
    this.props.updateComments(id,comments).bind(this);
  }
  deleteRestaurant() {
    let id = this.props.id;
    $.ajax({
        type: 'DELETE',
          url: `/restaurant/deleteRestaurant/${id}`,
          success: function(msg){
              this.props.removeRestaurant(id);
          }.bind(this)
      });
  }
  render() {
    let f = this.props.fav;
    let add = '';
    let update = '';
    let del = '';
    let text = '';
    if(f === 'favorite') {
      add = <ButtonComponent click={this.addRestaurant.bind(this)} color={this.state.buttonColor || 'green'}
        name={this.state.buttonName} iconName='heart' />
      text = <Input type='text' fluid placeholder='Add Comments' value={this.state.comments}
         onChange={this.onChangeComments.bind(this)} />
    }
    else {
      text = <Input type='text' fluid placeholder={this.props.comments} value={this.state.comments}
         onChange={this.onChangeComments.bind(this)} />
      update = <ButtonComponent click={this.updateRestaurant.bind(this)} color={this.state.updateButtonColor || 'green'}
             name={this.state.updateButton} attached='left' />
       del = <ButtonComponent click={this.deleteRestaurant.bind(this)} color={this.state.buttonColor || 'green'}
              name={this.state.deleteButton} attached='right'/>
    }
    return (
      <Card style={{marginTop:3+'%',marginLeft:0.5+'%'}}>
        <Image src={this.props.image} style={{height:220+'px'}}/>
        <Card.Content style={{height:150+'px'}}>
          <Card.Header style={{'text-align':'center'}}>{this.props.name}</Card.Header>
          <Card.Meta style={{'text-align':'center'}}>{this.props.address}</Card.Meta>
          <Card.Description style={{'text-align':'center'}}>Cuisines: {this.props.cuisines}</Card.Description>
          <Card.Description style={{'text-align':'center'}}>Cost for two: {this.props.costForTwo}</Card.Description>
        </Card.Content>
        <Card.Content style={{height:60+'px', border:'none'}}>
          <Card.Description>{text}</Card.Description>
        </Card.Content>
        <Card.Content> <Card.Description style={{height:20+'px', color:'orange'}}> <Icon name='star'/>{this.props.ratings}</Card.Description> </Card.Content>
        {add}
           <Button.Group>
            {update}
            {del}
          </Button.Group>
      </Card>

    );
  }

}
module.exports = CardComponent;
