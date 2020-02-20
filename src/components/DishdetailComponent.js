import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'; 

const RenderDetails = (props) => {
  const { dish } = props;
  if (dish !== null && dish !== undefined) return (
    // Task 2
    <Card>
        <CardImg wdith="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
    </Card> 
  ); 
  else return (
    <React.Fragment></React.Fragment>
  )
}

const RenderComments = (props) => {
  const { dish } = props;

  if (dish !== null && dish !== undefined) return (
    <Card>
      <CardBody>
        <CardTitle>Comments</CardTitle>
        {dish.comments.map((comment) => {
          return (
            <CardText key={comment.id}>
              {comment.comment}
              {`-- ${comment.author}, ${comment.date}`}
            </CardText>
          )
        })}
      </CardBody>
    </Card>
  );
  else return (
    <React.Fragment></React.Fragment>
  )
}

class DishDetail extends React.Component {
  render() {
    const { dish } = this.props;

    console.log("Dish detail rendered")
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDetails dish={dish} />
        </div>   
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={dish} />
        </div>         
      </div>
    )
  }
}

export default DishDetail;