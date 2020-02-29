import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  render() {
    const { dishes, comments, promotions, leaders } = this.props;

    const HomePage = () => {
      return (
        <Home 
          dish={dishes.filter((dish) => dish.featured)[0]}
          promotion={promotions.filter((p) => p.featured)[0]}
          leader={leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }    

    const DishWithId = ({ match }) => {
      return (
        <DishDetail 
          dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} /> 
          <Route exact path='/contactus' component={Contact} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const connector = connect(
  mapStateToProps,
  null
)

export default withRouter(connector(Main));