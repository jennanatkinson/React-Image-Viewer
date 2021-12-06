import {images} from './images.js'

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

export {ImageNavigation}