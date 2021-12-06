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
function DotNavItem({dotIndex, setImageIndex, activeIndex, setActiveIndex}) {
  return (<button className={`dotItem ${activeIndex === dotIndex ? "active" : ""}`} key={`dot + ${dotIndex}`}
  onClick={() => {
    setImageIndex(dotIndex);
    setActiveIndex(dotIndex);
  }}/>);
}

function ImageNavigation({setIndex}) {
  const [activeIndex, setActiveIndex] = useState(0);
  let dotNavList=[];
  images.forEach((image,index)=>{
    dotNavList.push(<DotNavItem dotIndex={index} setImageIndex={setIndex} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>)
  });
  return (<>{dotNavList}</>)
}

function Gallery() {
  const [index, setIndex] = useState(0);

  return (<>
    <ArrowButton direction="left" setIndex={setIndex} index={index}/>
    <ImageView index={index}/>
    <ArrowButton direction="right" setIndex={setIndex} index={index}/>
    <ImageNavigation setIndex={setIndex} />
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
