import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useParams, useNavigate, NavLink  } from 'react-router-dom'


const CatEdit = ( { cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name, 
    age: currentCat.age, 
    enjoys: currentCat.enjoys, 
    image: currentCat.image
  })

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value})
  }
 
const navigate = useNavigate()
const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
  navigate("/CatEdit")
}

  return (
    <>
    <div>Update Cat Profile</div>
    <Form>
        <FormGroup>
          <Label for="name">Edit Name</Label>
          <Input type="text" name="name" placeholder='name' onChange={handleChange} value={editCat.name} />
        </FormGroup>

        <FormGroup>
          <Label for="age">Edit age</Label>
          <Input type="text" name="age" placeholder='age' onChange={handleChange} value={editCat.age} />
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">Edit description</Label>
          <Input type="text" name="enjoys" placeholder='Describe your Cat for everyone!'onChange={handleChange} value={editCat.enjoys} />
        </FormGroup>

        <FormGroup>
          <Label for="image">Edit Profile Pic</Label>
          <Input type="text" name="image" placeholder='place url' onChange={handleChange} value={editCat.image} />
        </FormGroup>
        
        <Button onClick={handleSubmit} name="submit">
           Edit Cat
        </Button>
        

      </Form>
    </>
  )
}

export default CatEdit