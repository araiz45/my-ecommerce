import { useSelector } from "react-redux";
import CardCart from "./CardCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [price, setPrice] = useState(0)
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price
  }, 0)
  console.log(totalPrice)

  return (

    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="text-2xl font-bold">Cart ({cart.length})</h1>
          <div className="grid grid-cols-2 gap-3 p-12 justify-center">
            {cart.length > 0 ? cart.map((item) => (
              <CardCart item={item} key={item.id} />
            )) : "no item to show"}
          </div>
          <div className="">
            <div className="text-2xl font-bold mb-8 text-primary-content">Total Price: ${totalPrice}</div>
            <Link className="btn btn-primary" to={"/checkout"}>Processed to checkout</Link>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Cart;