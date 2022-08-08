import { Rating } from '@mui/material';
import React from 'react'
import { Form } from 'react-bootstrap'

const Filtre = ({searching,Ratingg,Ratee}) => {
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control onChange={(e)=>searching(e.target.value)} type="Title" placeholder="Enter Title" />
      </Form.Group>
      <Rating
  name="simple-controlled"
  Value={Ratee}
  max={10}
  onChange={(event,newValue)=>{Ratingg(newValue)}}
 />
      </Form>
    </div>
  )
}

export default Filtre;