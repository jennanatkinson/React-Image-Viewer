import './App.css';
import { useState } from 'react';

const imageRoute = 'images/';
const leftArrowImage = imageRoute + 'slider-left-arrow.svg';
const rightArrowImage = imageRoute + 'slider-right-arrow.svg';
const images = [
  'artanis.jpg',
  'arthas.jpg',
  'auriel.jpg',
  'blaze.jpg',
  'brightwing.jpg',
  'cassia.jpg',
  'chen.jpg',
  'chromie.jpg',
  'deckard-cain.png'
];

function getImageAlt(filename) {
  return filename.substring(0, filename.length - 4);
}

const ImageView = ({index}) => (
  <img src={imageRoute + images[index]} className="image-display" alt={getImageAlt(images[index])} />
);

function ArrowButton({direction, index, setIndex}) { //normally "props" but destructured to this
  if (direction === 'left' && index === 0) {
    return <></>;
  }
  else if (direction === 'right' && index === (images.length - 1)) {
    return <></>;
  }
  const filename = (direction === 'left') ? leftArrowImage : rightArrowImage;

  return (
    <button className={`arrows ${direction === 'left' ? "leftArrow" : "rightArrow"}`} onClick={() => {onArrowClick(direction, index, setIndex)}}>
      <img src={filename} alt={getImageAlt(filename)}/>
    </button>
  );
}

function onArrowClick(direction, index, setIndex) {
  if (direction === 'left' && index > 0) {
    setIndex(index - 1);
  }
  else if (direction === 'right' && index < (images.length - 1)) {
    setIndex(index + 1);
  }
}
// 
function DotNavItem({dotIndex, activeIndex, setActiveIndex}) {
  return (<button className={`dotItem ${activeIndex === dotIndex ? "active" : ""}`} key={`dot + ${dotIndex}`}
  onClick={() => {
    setActiveIndex(dotIndex);
  }}/>);
}

function ImageNavigation({setActiveIndex, activeIndex}) {
  let dotNavList=[];
  images.forEach((image,dotIndex)=>{
    dotNavList.push(<DotNavItem dotIndex={dotIndex} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>)
  });
  return (<div className={"imageNavigation"}>{dotNavList}</div>)
}

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
