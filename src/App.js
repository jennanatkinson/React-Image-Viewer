import './App.css';
import { useState } from 'react';
import { ImageView } from './ImageManager.js';
import { ArrowButton } from './ArrowButton.js';
import { ImageNavigation } from './ImageNavigation.js'

function Gallery() {
  const [index, setIndex] = useState(0);

  return (<>
    <ArrowButton direction="left" setIndex={setIndex} index={index}/>
    <div class="trim">
      <ImageView index={index}/>
    </div>
    <ArrowButton direction="right" setIndex={setIndex} index={index}/>
    <ImageNavigation setActiveIndex={setIndex} activeIndex={index}/>
  </>);
}
function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
