import { BASEURL } from "../axiosConfig";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from "../slice";

const CardCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={BASEURL + item.attributes.img.data[0].attributes.formats.medium.url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-primary-content text-5xl">{item.attributes.name}</h2>
        <p className="text-primary-content text-xl font-bold">Quantity: {item.count}</p>
        <p className="text-primary-content text-2xl font-bold">Price: ${item.attributes.price}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(item))}>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default CardCart;