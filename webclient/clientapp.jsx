var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var Favourties = require('./components/zomato/favourites');
var NavBar = require('./components/NavBar');
var About = require('./components/About');
var Home = require('./components/clientapp');
var login = require('./components/login');
var Favourites = require('./components/zomato/favourites')

var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
   <Router history={browserHistory}>
     <Route path='/' component={login}/>
     <Route component={MainComp}>
         <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
         <Route path="/favourites" component={Favourites}/>
     </Route>
   </Router>, document.getElementById('mountapp'));
