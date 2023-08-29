import { useState } from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import Gallery from './components/Gallery';

function App() {
  const [img, setImg] = useState([]);

  const urls = {
    random: () => 'https://dog.ceo/api/breeds/image/random',
    bread: (bread_) => `https://dog.ceo/api/breed/${bread_}/images/random`
  }

  console.log('render');

  const getNewPhoto = (select, range) => {
    let url = '';
    if (select === 'random') {
      url = urls.random();
    } else {
      url = urls.bread(select.split(' ').join('/'));
    }
    fetch(url + '/' + range)
    .then(resp => resp.json())
    .then(resp => {
      if (typeof resp.message === 'string') {
        setImg([resp.message]);
      } else if (Array.isArray(resp.message)) {
        setImg(resp.message);
      }
      
    });
  }

  return (
    <div className="App">
      <h2>React App</h2>

      <ControlPanel getNewPhoto={getNewPhoto}></ControlPanel>

      <Gallery images={img}></Gallery>
      
      
    </div>
  );
}


export default App;
