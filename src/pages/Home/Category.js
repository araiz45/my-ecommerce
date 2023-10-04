import { Link } from 'react-router-dom'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.jpg'
import Img5 from '../../assets/img5.jpg'
import Img6 from '../../assets/img6.jpg'
import Img7 from '../../assets/img7.jpg'
const Category = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-primary-content text-center mt-6">Category</h1>
      <div className="grid grid-cols-3 justify-center p-11 gap-11">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={Img1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold text-secondary ">T-Shirt</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="/tshirts" className="btn btn-primary">Discover Category</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={Img2} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold text-secondary">Shirts</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="/shirts" className="btn btn-primary">Discover Category</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={Img3} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold text-secondary">Sweat Shirt</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="/sweatShirt" className="btn btn-primary">Discover Category</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={Img4} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold text-secondary">Pants</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="/pants" className="btn btn-primary">Discover Category</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={Img5} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold text-secondary">Jacket</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="/jacket" className="btn btn-primary">Discover Category</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category;