import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from 'react-router-dom'



const CatNew = ( { createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
  setNewCat({ ...newCat, [e.target.name]: e.target.value} 
    )
}

  const handleSubmit = () => {
  createCat(newCat)
  navigate("/CatIndex")
}

  return (
    <div>Create a Profile
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" placeholder='name' onChange={handleChange} value={newCat.name} />
        </FormGroup>

        <FormGroup>
          <Label for="age">age</Label>
          <Input type="text" name="age" placeholder='age' onChange={handleChange} value={newCat.age} />
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">What does your Cat enjoy!</Label>
          <Input type="text" name="enjoys" placeholder='Describe your Cat for everyone!'onChange={handleChange} value={newCat.enjoys} />
        </FormGroup>

        <FormGroup>
          <Label for="image">Profile Pic</Label>
          <Input type="text" name="image" placeholder='place url' onChange={handleChange} value={newCat.image} />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
           Create New Cat Profile!
        </Button>
        </Form>
    </div>
  )
}

export default CatNew