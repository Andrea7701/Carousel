
import { useState } from "react";
import {HiArrowCircleLeft, HiArrowCircleRight} from "react-icons/hi"
import "./style.css"

const images = [

  "https://wallpaperaccess.com/full/138728.jpg",
  "https://wallpapercave.com/wp/wp2713643.jpg",
  "https://www.pcclean.io/wp-content/uploads/2020/4/niEfuu.jpg",
  "https://w0.peakpx.com/wallpaper/59/649/HD-wallpaper-paesaggio-boschi-montagna-prati.jpg",
  "https://www.itl.cat/pngfile/big/54-548012_new-hd-wallpapers-of-nature.jpg"
]

export default function App(){

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {

    setCurrent(current === images.length - 1 ? 0 : current + 1)

  }

  const prevSlide = () => {

    setCurrent(current === 0 ? images.length - 1 : current - 1)

  }

  return(

      <div>
        <h1>Project Carousel</h1>
        <div className="carousel">
          <div className="left-arrow" onClick={prevSlide}>
            <HiArrowCircleLeft/>
          </div>
          <div className="right-arrow" onClick={nextSlide}>
            <HiArrowCircleRight/>
          </div>    
          
          {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images"></img>
              </div>
            )
        )}

        </div>
      </div>

  )

}

