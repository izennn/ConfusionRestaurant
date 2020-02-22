import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'; 
import { Link } from 'react-router-dom'

function RenderDetails(props) {
  const { dish } = props;
  if (dish !== null && dish !== undefined) return (
    // Task 2
    <div className="col-12 col-md-5 m-1">
      <Card>
          <CardImg wdith="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
      </Card>     
    </div>

  ); 
  else return (
    <React.Fragment></React.Fragment>
  )
}

function RenderComments(props) {
  const { comments } = props;

  if (comments !== null && comments !== undefined) return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4> 
      <ul className="list-unstyled">
        {
          comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p> 
                <p>-- {comments.author}</p> 
              </li>
            )
          })
        }
      </ul>
    </div>
  );
  else return (
    <React.Fragment></React.Fragment>
  )
}

const DishDetail = (props) => {
  const { dish, comments } = props;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>  
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb> 
      </div>
      <div className="row">
        <RenderDetails dish={dish} /> 
        <RenderComments comments={comments} /> 
      </div> 
    </div>
  )
}

export default DishDetail;