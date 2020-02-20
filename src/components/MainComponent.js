import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    }    

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} /> 
          {/* turning Menu into func component allows props to be passed to it */}
          {/* <Route exact path="/dish" component={() => <DishDetail />} /> */}
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;