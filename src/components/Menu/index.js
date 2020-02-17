import React from 'react'; // allows me to create React component
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from '../DishDetail';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    }
  }

  componentDidMount() {
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  render() {
    const { selectedDish } = this.state;
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg wdith="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });    

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <DishDetail dish={selectedDish} />
        </div>
      </div>
    );
  }
}

export default Menu;