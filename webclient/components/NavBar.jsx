import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
let {Link} = require('react-router');
import $ from 'jqery';
class MenuExampleBasic extends Component {
   state = {}

   handleItemClick = (e, {name}) => this.setState({activeItem: name})
   logoutCall() {
      $.ajax({
        url: 'http://localhost:8080/users/logout',
        type: 'GET',
        // datatype: 'JSON',
        // data:{username :this.state.username,password:this.state.password},
        success: function(res)
        {
          if(typeof res.redirect === 'string') {
            window.location.replace(window.location.protocol + '//'
            + window.location.host + res.redirect);
          }
          // console.log(res.responseText);
          // browserHistory.push('/');
        }.bind(this),
        error: function(err)
        {
          alert("error occurred while logging out");
          console.log(err.responseText);
        }.bind(this)
      });
      }
   render() {
       const {activeItem} = this.state

       return (
           <Menu pointing color='orange'>
               <Link to="/home">
                   <Menu.Item name='/home' active={activeItem === '/home'}
                   onClick={this.handleItemClick}>
                       Home
                   </Menu.Item>
               </Link>
               <Link to="/favourites">
                   <Menu.Item name='favourites' active={activeItem === 'favourites'}
                     onClick={this.handleItemClick}>
                       Favourites
                   </Menu.Item>
               </Link>
               <Link to="/about">
                   <Menu.Item name='about' active={activeItem === 'about'}
                     onClick={this.handleItemClick}>
                       About Us
                   </Menu.Item>
               </Link>
                   <Menu.Item position='right' name='logout' active={activeItem === 'logout'}
                     onClick={this.logoutCall}>
                       Logout
                   </Menu.Item>

           </Menu>
       )
   }
}
module.exports = MenuExampleBasic;
// var React = require('react');
// var {Link} = require('react-router');
// import { Button, Dropdown, Menu } from 'semantic-ui-react';
//
// var NavBar = React.createClass({
//
// render:function(){
//   return(
//     // <Menu size='small'>
//     //     <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//     //     <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
//     //
//     //     <Menu.Menu position='right'>
//     //       <Dropdown item text='Language'>
//     //         <Dropdown.Menu>
//     //           <Dropdown.Item>English</Dropdown.Item>
//     //           <Dropdown.Item>Russian</Dropdown.Item>
//     //           <Dropdown.Item>Spanish</Dropdown.Item>
//     //         </Dropdown.Menu>
//     //       </Dropdown>
//     //
//     //       <Menu.Item>
//     //         <Button primary>Sign Up</Button>
//     //       </Menu.Item>
//     //     </Menu.Menu>
//     //   </Menu>
//    <div className="container-fluid">
//     <ul className="nav navbar-nav">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/favourites">Favourties</Link></li>
//
//     </ul>
//     </div>
//   );
// }
// });
//
// module.exports=NavBar;
