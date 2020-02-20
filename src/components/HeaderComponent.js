import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

// create navbar header to be used in all other components
// why class vs render? Because we need to maintain some UI state
class Header extends React.Component {
  render() {
    return (
      <React.Fragment> {/*enables us to group a bunch of React elements together*/}
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create an unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div> 
          </div> 
        </Jumbotron>
      </React.Fragment>
    )
  }
}

export default Header;