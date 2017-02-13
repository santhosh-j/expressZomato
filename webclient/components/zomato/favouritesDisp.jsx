import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Card, Icon, Image} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import ButtonComponent from './buttonComponent.jsx'
import CardsComponent from './cardComponent.jsx'
class FavouritesDisp extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

updateComments(id,comments) {
  this.props.updateComments(id, comments);
}

  render() {
    let removeRestaurant = this.props.removeRestaurant;
    let updateComments = this.updateComments.bind(this);
    var JsonArray = this.props.json.map(function(item){
      return (
         <CardsComponent  id={item._id}
        name={item.name}
         image={item.image}
         address={item.address}
         cuisines={item.cuisines}
         costForTwo={item.costForTwo}
         ratings={item.ratings}
       comments={item.comments}
       removeRestaurant={removeRestaurant}
       updateComments={updateComments}
      //  del='deleted'
     />
     );
   });

    return (
      <Card.Group>
        {JsonArray}
      </Card.Group>
    );
  }
}
module.exports = FavouritesDisp;
