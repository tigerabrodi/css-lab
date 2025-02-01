import FirstImage from './images/image-1.png'
import SecondImage from './images/image-2.png'
import ThirdImage from './images/image-3.png'
import FourthImage from './images/image-4.png'
import FifthImage from './images/image-5.png'
import SixthImage from './images/image-6.png'
import SeventhImage from './images/image-7.png'
import EighthImage from './images/image-8.png'
import NinthImage from './images/image-9.png'
import './styles.css'

const images = [
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  FifthImage,
  SixthImage,
  SeventhImage,
  EighthImage,
  NinthImage,
]

export function ImageGridHover() {
  return (
    <div className="min-h-screen bg-amber-50 w-full flex items-center justify-center">
      <div className="image-grid-container">
        {images.map((image) => (
          <div className="image-grid" key={image}>
            <img src={image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  )
}
