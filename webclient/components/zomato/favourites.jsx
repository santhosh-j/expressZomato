import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Card, Icon, Image} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import FavouritesDisp from './favouritesDisp.jsx'

class Favourties extends React.Component {
  constructor() {
    super();
    this.state = {
      json:[]
    }
  }
  componentWillMount() {
    $.ajax({
       type: 'GET',
       url: '/restaurant/view',
       success: function(data) {
           console.log('got Json',data);
           this.setState({json: data});
       }.bind(this),
       error: function(err) {
           console.log('error occurred on AJAX');
           console.log(err);
       }.bind(this)
    });
  }
  removeRestaurant(id) {
      let arr = [];
      let json1 = this.state.json;
      for(let item of json1) {
        if(item._id !== id) {
          arr.push(item);
        }
      }
      this.setState ({
        json:arr
      });
  }
  updateComments(id, comments) {
    let json1 = this.state.json;
    for(let item of json1) {
      if(item._id === id) {
        item.comments = comments;
      }
    }
    this.setState ({
      json:json1
    });
  }
  render() {
    return (
      <div>
        <FavouritesDisp json={this.state.json}
           removeRestaurant={this.removeRestaurant.bind(this)}
           updateComments={this.updateComments.bind(this)} />
      </div>
    );
  }
}
module.exports = Favourties;
