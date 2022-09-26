import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import {  NavLink } from 'react-router-dom'
import '../App.css'

  const CatShow = ({ cats }) => {
  const {id} = useParams()
  console.log(id)
  const currentCat = cats?.find(cat => cat.id === +id)
  
  return (
  <>
    <h2 className='cat-card'> Meet {currentCat.name}
      <Card className='cat-card'
        style={{
          width: '18rem'
        }} 
        >
        <img
        alt="card-image"
        src={currentCat.image}
        />
        <CardBody className='cat-card'>
          <CardTitle tag="h5">
           Name: {currentCat.name} <br></br>Age:
            {currentCat.age}
          </CardTitle>
            <CardText className='cat-card'>
              {currentCat.enjoys}
            </CardText>
         </CardBody>
         <NavLink to={`/CatEdit/${currentCat.id}`} className="nav-link">
          <Button >
            Edit Cat
          </Button>
         </NavLink>
        </Card>
      </h2>
  </>  
  )
}

export default CatShow