import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.jsx';
//Export the component, so that by including the Folder, by default the component is exported
export default Child;
 // var ChildComponent1 = require('./child.jsx').ChildComponent1;
 // var ChildComponent2 = require('./child.jsx').ChildComponent2;
class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          message :  "Modified message for Child"
        }
    }
    setName(e) {
      e.preventDefault();
      var msg = this.refs.msg.value;
      this.refs.msg.value = '';
      if(msg.length > 0) {
        this.setState({
          message: msg
        });
      }
    }
    render() {
        return (
            <div>
                <h1>Hello From index</h1>
                <h3>{this.state.message}</h3>
                <h3>Message: {this.state.message}</h3>
                <form onSubmit={this.setName.bind(this)}>
                  <input type="text" ref="msg" />
                  <button>Set Message</button>
                </form>
                <Child.ChildComponent1 message={this.state.message}/>
                <Child.ChildComponent2 message={this.state.message}/>
                <Child.GrandChildComponent/>
            </div>
        );
    }
}

module.exports = ParentComponent;
