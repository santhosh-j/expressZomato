import React from 'react';
import ReactDOM from 'react-dom';
import GrandChildComponent from './grandChild.jsx';
class ChildComponent1 extends React.Component {
    constructor() {
        super();
        this.state = {
          message: "Hi Santhosh!"
        }
        this.changeName = this.changeName.bind(this);
    }
    changeName() {
      if(this.state.message === "Hi Santhosh!") {
        this.setState({
          message: "Hi Arun!"
        });
      }
      else {
        this.setState({
          message: "Hi Santhosh!"
        });
      }
    }
    render() {
        return (
            <div>
                <h3>Hello From child1</h3>
                <p>{this.props.message}??</p>
                <button onClick={this.changeName}>{this.state.message}</button>
            </div>
        );
    }
}
class ChildComponent2 extends React.Component {
    constructor() {
        super();
        this.state = {
          msg: "Rak"
        };
        this.setName = this.setName.bind(this);
    }
    setName(e) {
      e.preventDefault();
      var nam = this.refs.msg.value;
      this.refs.msg.value = '';
      if(nam.length > 0) {
        this.setState({
          msg: nam
        });
      }
    }
    render() {
        return (
            <div>
                <h3>Hello From child2</h3>
                <p>{this.props.message}!!!!</p>
                <h3>Message: {this.state.msg}</h3>
                <form onSubmit={this.setName}>
                  <input type="text" ref="msg" />
                  <button>Set Name</button>
                </form>
                <GrandChildComponent message="message to grandchild"/>
            </div>
        );
    }
}
module.exports = {
  ChildComponent1,
  ChildComponent2,
  GrandChildComponent
};
