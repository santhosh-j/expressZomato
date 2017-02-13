var React = require('react');
var {Link} = require('react-router');
import { Button, Dropdown, Menu } from 'semantic-ui-react';

var NavBar = React.createClass({

render:function(){
  return(
    // <Menu size='small'>
    //     <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
    //     <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
    //
    //     <Menu.Menu position='right'>
    //       <Dropdown item text='Language'>
    //         <Dropdown.Menu>
    //           <Dropdown.Item>English</Dropdown.Item>
    //           <Dropdown.Item>Russian</Dropdown.Item>
    //           <Dropdown.Item>Spanish</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //
    //       <Menu.Item>
    //         <Button primary>Sign Up</Button>
    //       </Menu.Item>
    //     </Menu.Menu>
    //   </Menu>
   <div className="container-fluid">
    <ul className="nav navbar-nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/favourites">Favourties</Link></li>

    </ul>
    </div>
  );
}
});

module.exports=NavBar;
