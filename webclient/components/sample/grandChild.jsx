import React from 'react';
import ReactDOM from 'react-dom';

class GrandChildComponent extends React.Component {
  constructor() {
      super();
  }
  render() {
        return (
            <div>
                <h3>Hello From Grand child</h3>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
module.exports = GrandChildComponent;
