import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './cardComponent.jsx'
import { Grid, Card, Icon, Image} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
var uiCardStyle = {
  height: '120px',
}
class GrandChild2 extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonName: 'Add as favorite',
      buttonValue: 'heart',
      buttonColor: 'green'
    }
  }
  render() {
      var restaurants = this.props.Obj.map(function(obj) {
        return(
            <CardComponent
                image={obj.restaurant.featured_image}
                name={obj.restaurant.name}
                cuisines={obj.restaurant.cuisines}
                address={obj.restaurant.location.address}
                costForTwo={obj.restaurant.average_cost_for_two}
                ratings={obj.restaurant.user_rating.aggregate_rating}
                comments={obj.restaurant.comments}
                fav='favorite'
            />
            // {/* <Card style={{marginTop:3+'%',marginLeft:0.5+'%'}}>
            //   <Image src={obj.restaurant.featured_image} style={{height:220+'px'}}/>
            //   <Card.Content>
            //     <Card.Header>{obj.restaurant.name}</Card.Header>
            //     <Card.Meta>{obj.restaurant.location.address}</Card.Meta>
            //     <Card.Description>Cuisines: {obj.restaurant.cuisines}</Card.Description>
            //     <Card.Description>Cost for two: {obj.restaurant.average_cost_for_two}</Card.Description>
            //     <Card.Description>Rating: {obj.restaurant.user_rating.aggregate_rating}<Icon name='star'/></Card.Description>
            //     <Card.Description><Input inverted placeholder='Comments...' value={obj.restaurant.comments} /></Card.Description>
            //   </Card.Content>
            //   <Card.Content extra style={{backgroundColor:'lightgrey'}}>
            //     <Button onClick={whenClick1} size='large' color={buttonColor1 || 'green'} >
            //       <Icon name={buttonValue1}></Icon>
            //       {buttonName1}
            //     </Button>
            //     {/* <a>
            //       <Icon name='empty heart'/>
            //       Add as Favorites
            //     </a> */}
            // //   </Card.Content>
            // // </Card>
            // */}

        );

      });
      return (
        // <div style={uiCardStyle} className='ui four stackable cards'>
        //  {restaurants}
        // </div>
        <Card.Group>
          {restaurants}
        </Card.Group>
      );
  }
}
 module.exports = GrandChild2;
