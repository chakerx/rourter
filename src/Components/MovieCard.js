import { Rating } from '@mui/material';
import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MovieCard ({dataMovie})  {
  return (
    <div >
       <Link to={`/description/${dataMovie.id}`}>
        <div>
      <Row style={{ width:'20rem',gap:'50px',marginLeft:'130px' }}>
      <Card >
      <Card.Img style={{width:'18rem',height:'370px'}} variant="top" src={dataMovie.posterUrl} />
      <Card.Body>
        <Card.Title>{dataMovie.title}</Card.Title>
        <Card.Text>
          {dataMovie.description}
        </Card.Text>
        <Rating name="read-only" value={dataMovie.rating} readOnly max={10} />
      </Card.Body>
      <button className="Button">The Trailer</button>
    </Card>
    </Row>
    </div>
    </Link>
     
    </div>
  );
}

export default MovieCard;