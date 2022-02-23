import React from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating';

const MovieCard = ({moviep}) => { 
    console.log(moviep)
  return (
    <div>
        
        <Card className="card" style={{ width: '16rem' }}>
  <Card.Img variant="top" src={moviep.posterURL} style={{height:"300px"}} />
  <Card.Body>
    <Card.Title>{moviep.title}</Card.Title>
    <Card.Text className="cardtext">
      {moviep.description}
    </Card.Text>
    
  </Card.Body>
  
      <Rating   ratingValue={moviep.rating} readonly={true} /* Available Props */ />
    
  
</Card>

    </div>
  )
}

export default MovieCard