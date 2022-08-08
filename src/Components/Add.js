import React, { useState } from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
import { Rating } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Add = ({TheMovie}) => {
    const [show, setShow] = useState(false);

    const [newMovie,setNewMovie] = useState({
        id:uuidv4(),
        title:'',
        description:'',
        posterUrl:'',
        rating:'',
    })

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const Handlechange = (e) =>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    const HandleSave=()=>{
        TheMovie(newMovie)
        handleClose()
    }
  return (
    <div>
      <Button  variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

        <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={Handlechange} name='title'  type="Title" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={Handlechange} name='description' type="Description" placeholder="Enter Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Pster Url Image</Form.Label>
        <Form.Control onChange={Handlechange} name='poster Url' type="Title" placeholder="Enter Pster Url Image" />
      </Form.Group>

      <Rating
  name="simple-controlled"
  Value={newMovie.rating}
  max={10}
  onChange={(event, newValue) => {
   setNewMovie({...newMovie,rating:newValue});
  }}
/>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleSave}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add;