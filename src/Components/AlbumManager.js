import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumManager = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [editingAlbum, setEditingAlbum] = useState(null);

  // Fetch albums on component mount
  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const addAlbum = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/albums', {
        title: newAlbumTitle,
        userId: 1,
      });
      // Since it's a dummy call, we'll add the new album to our state
      setAlbums([...albums, response.data]);
      setNewAlbumTitle('');
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  const updateAlbum = async (id, newTitle) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        title: newTitle,
        userId: 1,
      });
      // Update the album in our state
      setAlbums(
        albums.map((album) => (album.id === id ? response.data : album))
      );
      setEditingAlbum(null);
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

  return (
    <div>
      <h1>Album Manager</h1>

      <input
        type="text"
        placeholder="New album title"
        value={newAlbumTitle}
        onChange={(e) => setNewAlbumTitle(e.target.value)}
      />
      <button onClick={addAlbum}>Add Album</button>

      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {editingAlbum === album.id ? (
              <input
                type="text"
                defaultValue={album.title}
                onBlur={(e) => updateAlbum(album.id, e.target.value)}
              />
            ) : (
              <span>{album.title}</span>
            )}
            <button onClick={() => setEditingAlbum(album.id)}>Edit</button>
            <button onClick={() => deleteAlbum(album.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumManager;
