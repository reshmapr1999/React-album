import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {AlbumForm} from './AlbumForm';
import AlbumCard from './AlbumCard';
import './Home.css';
function Home() {
    const [albums,setAlbums] = useState([]);
    const [newAlbumTitle, setNewAlbumTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [editingAlbum, setEditingAlbum] = useState(null);
    
   useEffect(()=>{
        fetchAlbums();
    },[] );

    const fetchAlbums = async ()=>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
        }catch(error) {
            console.error('Error fetching albums:', error);
        }
    }

    const addAlbum = async ()=>{
        try{
            
          const newId = albums.length > 0 ? albums[albums.length - 1].id + 1 : 1;
          const newAlbum = {
            id: newId, // Assign the new unique ID
            title: newAlbumTitle,
            userId: parseInt(userId),
          };
            const response = await axios.post('https://jsonplaceholder.typicode.com/albums',{
                id:newId,
                title: newAlbumTitle,
                userId: parseInt(userId),
            });
            // Since it's a dummy call, we'll add the new album to our state
            setAlbums([...albums, newAlbum]);
            setNewAlbumTitle('');
            setUserId('');
        }catch (error) {
            console.error('Error adding album:', error);
          }
    };

    const updateAlbum = async (id, newTitle) => {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, {
          title: newTitle,
          userId: parseInt(userId),
        });
        // Update the album in our state
        setAlbums(
          albums.map((album) => (album.id === id ? response.data : album))
        );
        setEditingAlbum(null);
        setNewAlbumTitle(''); // Clear the title input
        setUserId(''); // Clear the userId if needed
      } catch (error) {
        console.error('Error updating album:', error);
      }
    };
  
    const deleteAlbum = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
        // Remove the album from our state
        setAlbums(albums.filter((album) => album.id !== id));
      } catch (error) {
        console.error('Error deleting album:', error);
      }
    };
    const handleEdit = (album) => {
      setEditingAlbum(album.id); // Set the album being edited
      setNewAlbumTitle(album.title); // Populate the input field with the current album title
      setUserId(album.userId); // Optionally set userId if needed
    };

  return (
    <div className='display'>
        <AlbumForm
          userId={userId}
          setUserId={setUserId}
          newAlbumTitle={newAlbumTitle}
          setNewAlbumTitle={setNewAlbumTitle}
          addAlbum={addAlbum}
          updateAlbum={updateAlbum}
          editingAlbum={editingAlbum}
      />
      {albums.map((album,i) => (
        <AlbumCard key={album.id}
          i={i}
          title={album.title} 
          id={album.id}  
          setEditingAlbum={handleEdit}
          deleteAlbum={deleteAlbum}
          updateAlbum={updateAlbum} />
      ))}
    </div>
  )
}

export default Home
