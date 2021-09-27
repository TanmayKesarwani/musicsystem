import React, {useState} from 'react';
import './main.css';
import data from './data';

import MusicList from './music';


function App() {
  const[search, setSearch] = useState('');
  return (
    <div className="app">
      <header className="header">
        <div className='title'>
          <h3 className='music_system'>Music System</h3>
        </div>
        <button className="signout">
          signout
        </button>
      </header>
      <section>
        <section>
          <div className="search">
            <input type="text" placeholder='Search All Tracks' onChange={(val) => {setSearch(val.target.value)}} />
          </div>
        </section>
        
        {
          data.filter((val) => { 
            //if string is empty, display all the music
            if(search === '') {
              return val
            }
            //if not then display the matched music
            else if(val.title.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
          }).map((val) => {
            return <MusicList key={val.id} {...val}> </MusicList>
          })
          
        }
      </section>
    </div>
  );
  
}

export default App;
