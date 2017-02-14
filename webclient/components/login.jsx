let React = require('react');
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
let {browserHistory} = require('react-router');
let Login = React.createClass({
getInitialState: function()
{
 return {username: '', password: '', isLoggedIn: ''};
},
handleUserName: function(e)
{
 this.setState({username: e.target.value});
},
handlePassword: function(e)
{
 this.setState({password: e.target.value});
},
LoginUser: function()
{
 $.ajax({
   url: 'http://localhost:8080/users/login',
   type: 'POST',
   datatype: 'JSON',
   data: this.state,
   success: function(res)
   {
     console.log(res.responseText);
     browserHistory.push('/home');
   }.bind(this),
   error: function(err)
   {
     alert('Invalid username or password');
     console.log(err.responseText);
   }.bind(this)
 });
}
,
 render: function(){
   return(
   <div className="Login" style={{margin: 'auto', 'background-color': 'lightblue', marginTop: '20px', align: 'center',
     'text-align': 'center', width: 30 + '%', padding: 10 + 'px'}}>
        <h2 className="text-center">Login</h2>
        <div className="form-group" style={{margin: '10px'}}>
        <Input fluid className="form-control" onChange={this.handleUserName}
           placeholder="Enter a User Name..." type="text" />
        </div>
        <div className="form-group" style={{margin: '10px'}}>
        <Input fluid className="form-control" onChange={this.handlePassword}
          placeholder="Enter a Password..." type="password" />
        </div>
        <Input size='large' className="btn btn-primary btn-block" onClick={this.LoginUser}
           type="submit" value="Login" />
   </div>


   );
 }
})

module.exports=Login;
