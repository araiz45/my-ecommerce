import { BASEURL } from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slice";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  const [count, setCount] = useState(1)
  // const linkName = item.attributes.name.split(" ")
  // const linkGoName = linkName.join("++2++")
  // console.log(cart)
  return (
    <Link to={`/product/${item.attributes.slug}`} className="card w-96 bg-secondary text-secondary-content shadow-xl">
      <figure><img src={BASEURL + item.attributes.img.data[0].attributes.formats.medium.url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{item.attributes.name}</h2>
        {/* <p>{item.attributes.intro}</p> */}
        <h3 className="card-title">Price: ${item.attributes.price}</h3>
        <div className="card-actions justify-center items-center flex flex-row ">
          <div className="join">
            <button className="btn join-item btn-primary text-primary-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setCount(count + 1)}>
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
            </button>
            <input className="input input-bordered join-item w-16 bg-secondary text-primary-content" type="number" placeholder="0" value={count} onChange={(e) => setCount(e.target.value)} />
            <button className="btn join-item btn-primary text-primary-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setCount(Math.max(count - 1, 1))}>
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
            </svg>
            </button>
          </div>
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <button className="btn btn-primary" onClick={() => dispatch(addToCart({ item: { ...item, count } }))}>Add to Cart</button>
        </div>
      </div>
    </Link>
  )
}

export default Card;