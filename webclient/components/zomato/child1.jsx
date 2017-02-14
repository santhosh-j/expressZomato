import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react'
import GrandChild from './grandChild.jsx'
import GrandChild2 from './grandChild2.jsx'

class Child1 extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      cuisine: '',
      Obj: []
    }
    this.onCityChange = this.onCityChange.bind(this);
    this.onCuisineChange = this.onCuisineChange.bind(this);
  }
  onCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  onCuisineChange(e) {
    this.setState({
      cuisine: e.target.value
    });
  }
  onObjectChangeChild1(obj) {
    //console.log(JSON.stringify(obj));
    this.setState({
      Obj: obj
    });
  }
  render() {
      return (
        <div>
          <div className='ui center aligned grid' style={{marginTop:2+'%'}}>
            <Input focus placeholder='city' onChange={this.onCityChange}/>
            <Input focus placeholder='cuisine' onChange={this.onCuisineChange}/>
            <GrandChild city={this.state.city} cuisine={this.state.cuisine}
               onObjectChange={this.onObjectChangeChild1.bind(this)} />
          </div>
            <GrandChild2 Obj={this.state.Obj} />
        </div>
      );
  }
}
module.exports = Child1;
