
import './App.css';
import AlbumManager from './Components/AlbumManager';
import Navbarcomponent from './Components/Navbarcomponent';
import AlbumCard from './Components/AlbumCard';
import Home from './Components/Home';



function App() {
  return (
    <div className="App">
      {/* <header className='header'>
        <h1>Album List</h1>
        </header> */}
      <Navbarcomponent/>
    {/* <AlbumManager/> */}
    {/* <AlbumCard/> */}
    <Home/>
      
    

    </div>
  );
}

export default App;
