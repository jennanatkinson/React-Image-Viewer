import { imageRoute, getImageAlt } from './ImageManager';
import {images} from './images.js'

const leftArrowImage = imageRoute + 'slider-left-arrow.svg';
const rightArrowImage = imageRoute + 'slider-right-arrow.svg';

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

export {ArrowButton}