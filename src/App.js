import React from 'react';
import Menu from './components/Menu';
import { Navbar, NavbarBrand } from 'reactstrap';

import { DISHES } from './shared/dishes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }

  render() {
    const { dishes } = this.state;
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={dishes}/>
      </div>
    );    
  }
}

export default App;
