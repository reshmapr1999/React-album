import React from 'react'
import './Albumform.css'
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const  AlbumForm = ({ userId, setUserId, newAlbumTitle, setNewAlbumTitle, addAlbum,updateAlbum,editingAlbum }) =>{

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAlbumTitle.trim() === '') {
      toast.error("please enter a title");
    }
    else if (editingAlbum) {
        // If editing, call updateAlbum
        updateAlbum(editingAlbum, newAlbumTitle); // Pass the current editing album ID and new title
    } else {
        // If adding, call addAlbum
        addAlbum();
    }
};
  return (
      <form className='albumForm' onSubmit={handleSubmit}>
        
        <h4 style={{color: 'wheat'}}>{editingAlbum ? 'Edit Album' : 'Add Album'}</h4>
          <input className='formInput'
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          />    
      
          <input 
          className='formInput'
          type="text" 
          placeholder='Enter the title...'  
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
          />
          <button className="sub-btn" type='submit'>{editingAlbum ? 'Edit Album' : 'Add Album'}</button>
          <ToastContainer />
    </form>
  )
}

export default AlbumForm;
