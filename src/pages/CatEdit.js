import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useParams, useNavigate } from 'react-router-dom'
import '../App.css'

const CatEdit = ( { cats, updateCat }) => {
  const { id } = useParams()
  const currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name:"", 
    age: "", 
    enjoys: "", 
    image: ""
  })

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value})
  }
 
const navigate = useNavigate()
const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
  navigate("/CatIndex")
}

  return (
    <>
      <div className='editPage, homeBack'>Update Cat Profile
          <Form >
            <FormGroup className='form'>
              <Label for="name">Edit Name</Label>
              <Input type="text" name="name" placeholder='name' onChange={handleChange} value={editCat.name} />
            </FormGroup>

            <FormGroup className='form'>
              <Label for="age">Edit age</Label>
              <Input type="text" name="age" placeholder='age' onChange={handleChange} value={editCat.age} />
            </FormGroup>

            <FormGroup className='form'>
              <Label for="enjoys">Edit description</Label>
              <Input type="text" name="enjoys" placeholder='Describe your Cat for everyone!'onChange={handleChange} value={editCat.enjoys} />
            </FormGroup>

            <FormGroup className='form'>
              <Label for="image">Edit Profile Pic</Label>
              <Input type="text" name="image" placeholder='place url' onChange={handleChange} value={editCat.image} />
            </FormGroup>

            <Button className=''onClick={handleSubmit} name="submit">
               Edit Cat
            </Button>
          </Form>
        </div>
    </>
  )
}

export default CatEdit
