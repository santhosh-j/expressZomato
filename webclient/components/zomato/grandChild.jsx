import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

class GrandChild extends React.Component {
  constructor() {
    super();
    this.getResturantDataFromZomato = this.getResturantDataFromZomato.bind(this);
  }
  getResturantDataFromZomato ()
  {
        console.log('City id:'+this.props.city);
        console.log('Cuisine id:'+this.props.cuisine);
    $.ajax({
       url:`https://developers.zomato.com/api/v2.1/search?entity_id=`+this.props.city+`&entity_type=city&q=`+this.props.cuisine+`&count=12`,
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
        <Button onClick={this.getResturantDataFromZomato}>Search</Button>
      </div>

    );
  }
}
 module.exports = GrandChild;
