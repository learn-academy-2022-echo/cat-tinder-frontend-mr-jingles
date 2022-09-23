import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import {  NavLink } from 'react-router-dom'

  const CatShow = ({ cats }) => {
  const {id} = useParams()
  console.log(id)
  const currentCat = cats?.find(cat => cat.id === +id)
  
  return (
  <>
    <h1> Show us the Cats</h1>
      <Card
        style={{
          width: '18rem'
        }}
        >
        <img
        alt="card-image"
        src={currentCat.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            {currentCat.name},
            {currentCat.age},
          </CardTitle>
            <CardText>
              {currentCat.enjoys}
            </CardText>
         </CardBody>
         <NavLink to={`/CatEdit/${currentCat.id}`} className="nav-link">
         <Button >
          Edit Cat
         </Button>
         </NavLink>
      </Card>
  </>  
  )
}

export default CatShow