import {images} from './images.js'

const imageRoute = 'images/';

function getImageAlt(filename) {
  return filename.substring(0, filename.length - 4);
}

const ImageView = ({index}) => (
  <img src={imageRoute + images[index]} className="image-display" alt={getImageAlt(images[index])} />
);

export {imageRoute, getImageAlt, ImageView}