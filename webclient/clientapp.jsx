import React from 'react';
import ReactDOM from 'react-dom';
var ParentComponent = require('./components/sample/index.jsx');
import Child from './components/sample/child.jsx';
class MainComponent extends React.Component {
    constructor() {
        super();
    }
    getResturantDataFromZomato (cusine)
    {

      $.ajax({

         url:"https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&q="+cuisine+"&count=10",
         type:'GET',
         beforeSend: function (request)
                     {
                         request.setRequestHeader("user-key", "9351c23066e0ae833d7602c214e1ae98");
                     },
        success: function(data)
        {
          console.log('Successfully got JSON from Zomato' + data);

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
                <h1>Hello From ReactP</h1>
                <h1>Hello From Santhosh</h1>
                <ParentComponent/>
            </div>
        );
    }
}

ReactDOM.render(
    <ParentComponent/>, document.getElementById('mountapp'));
