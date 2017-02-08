import React from 'react';
import ReactDOM from 'react-dom';
var ParentComponent = require('./components/sample/index.jsx');
import Child from './components/sample/child.jsx';
class MainComponent extends React.Component {
    constructor() {
        super();
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
