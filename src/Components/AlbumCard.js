import {Button,Card }from 'react-bootstrap';
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function AlbumCard({i,title,album,handleEdit,deleteAlbum}) {
  return (
    
    <Card className="text-center" style={{width: '15rem', height: '18rem', margin:'10px',backgroundColor:'#F6EACB',borderBlockColor:'#921A40' ,fontFamily:'serif',fontSize:'18px'}} >
    <Card.Body>
      <Card.Title style={{justifyContent:'center',alignItems:'center',marginTop:'10px'}}><strong>Album {i}</strong></Card.Title>
      <Card.Text style={{marginTop:'30px'}}> 
        <span> <strong>Title:</strong>  {title} 
          </span></Card.Text>
      <Button variant="secondary" style={{marginRight:'25px',marginTop:'30px'}} onClick={() => handleEdit(album)}>
        <FontAwesomeIcon  icon={faPenToSquare} />
      </Button>
      <Button  variant="secondary"style={{marginTop:'30px'}} onClick={() => deleteAlbum(album.id)}>
      <FontAwesomeIcon icon={faTrash}  />
      </Button>
    </Card.Body>
  </Card>
  )
}

export default AlbumCard;
