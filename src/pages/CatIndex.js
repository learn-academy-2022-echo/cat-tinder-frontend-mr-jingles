import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import '../App.css'
import { NavLink } from "react-router-dom"



const CatIndex = ({cats}) => {
  return (
    <main className='cat-cards-by-index'>
      {cats.map((cat,index) => {
        return (
          <Card style={{width: '18rem' }} key={index}>
            <img alt="pic of cat" src={cat.image}/>
         <CardBody>
           <CardTitle tag="h5">{cat.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Age: {cat.age}
            </CardSubtitle>
           <NavLink to={`/CatShow/${cat.id}`} className="nav-link"> 
            <Button>See More Details</Button>
          </NavLink>
         </CardBody>
        </Card>
        )
      })}
    </main>
  )
}

export default CatIndex