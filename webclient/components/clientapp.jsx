import React from 'react';
import ReactDOM from 'react-dom';

import Child1 from './zomato/child1.jsx';
class MainComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Child1/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));
module.exports = MainComponent
