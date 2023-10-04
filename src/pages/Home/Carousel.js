import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Img1 from '../../assets/img1.jpg'
// import Img2 from '../../assets/img2.jpg'
// import Img3 from '../../assets/img3.jpg'
// import Img4 from '../../assets/img4.jpg'
// import Img5 from '../../assets/img5.jpg'
// import Img6 from '../../assets/img6.jpg'
// import Img7 from '../../assets/img7.jpg'


const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const CarouselImg = () => {
  return (
    <Carousel infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      showIndicators={false}
      showStatus={false}
      width={"100%"}
      centerMode={true}
      dynamicHeight={true}
      className="h-[33rem] overflow-hidden"
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button onClick={onClickHandler} className="absolute z-10 top-[15rem] left-[2rem] text-primary bg-secondary p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"  >
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
          </svg>

        </button >
      )}
      renderArrowNext={(onClickHandler, hasPrev, label) => (
        <button onClick={onClickHandler} className="absolute z-10 top-[15rem] right-[2rem] text-primary bg-secondary p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
          </svg>


        </button >
      )}
    >
      {
        Object.values(heroTextureImports).map((texture, index) => (
          <div key={`carousel-image-${index}`}>
            <img src={texture} />
            <button className="btn btn-primary z-10 absolute top-[25rem] left-[25rem]">Discover Cateogries</button>
          </div>
        ))
      }
    </Carousel >
  )
}

export default CarouselImg;