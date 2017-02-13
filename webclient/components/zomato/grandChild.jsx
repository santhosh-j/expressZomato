import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

class GrandChild extends React.Component {
  constructor() {
    super();
    this.getRestaurantCityFromZomato = this.getRestaurantCityFromZomato.bind(this);
    this.getResturantDataFromZomato = this.getResturantDataFromZomato.bind(this);
  }
  getRestaurantCityFromZomato()
   {
     let city = this.props.city;
       $.ajax({
           url: `https://developers.zomato.com/api/v2.1/locations?query=` + city,
           type: 'GET',
           beforeSend: function(request) {
               request.setRequestHeader("user-key",  "ecf561859b9c3faaa8eea09760fcbd7c");
           },
           success: function(data) {
               console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
                                // this.setState({result : data.restaurants}).bind(this);
                                this.getRestaurantDataFromZomato(data.location_suggestions[0].city_id)
           }.bind(this),
           error: function(err) {
               console.log('error occurred on AJAX');
               console.log(err);
           }.bind(this)
       });
   }
  getResturantDataFromZomato (id)
  {
        console.log('Cuisine id:'+ this.props.cuisine);
    $.ajax({
       url:`https://developers.zomato.com/api/v2.1/search?entity_id=`+id+`&entity_type=city&q=`+this.props.cuisine+`&count=12`,
       type:'GET',
       beforeSend: function (request)
                   {
                       request.setRequestHeader("user-key", "ecf561859b9c3faaa8eea09760fcbd7c");
                   },
      success: function(data)
      {
        console.log('Successfully got JSON from Zomato' + data);
        console.log(data.restaurants)
        this.props.onObjectChange(data.restaurants);
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
  }
  render() {
    return (
      <div>
        <Button onClick={this.getRestaurantCityFromZomato}>Search</Button>
      </div>

    );
  }
}
 module.exports = GrandChild;
