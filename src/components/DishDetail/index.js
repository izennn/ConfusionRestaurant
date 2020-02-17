import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'; 

class DishDetail extends React.Component {
  render() {
    const { dish } = this.props;

    // first check if there is a selected dish
    if (dish === null) return (
      <React.Fragment></React.Fragment>
    );
    else return (
      <Card>
          <CardImg wdith="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
      </Card> 
    );
  }
}

export default DishDetail;