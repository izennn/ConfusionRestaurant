import React from 'react'; // allows me to create React component
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({dish, onClick}) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

const Menu = (props) => {
  const menu = props.dishes.map(dish => {
    return (
      <div className={"col-12 col-md-5 m1"} key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">
        {menu} 
      </div>
    </div>
  )
}

export default Menu;