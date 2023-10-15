import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <>
      <Cart />
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <Link className="btn btn-secondary normal-case text-xl" to={'/'}>Ecommerce</Link>
        </div>
        <div className="flex-none gap-4">
          <button className="btn btn-square btn-primary flex flex-col justify-center items-center w-[5rem]" onClick={() => document.getElementById('my_modal_4').showModal()}>
            {cart.length > 0 ? <span className="indicator-item badge badge-accent">{cart.length}</span> : ""}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
            </svg>

          </button>
          <Link className="btn btn-square btn-primary flex flex-col justify-center items-center w-[5rem]" to="/search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
          </Link>
        </div >
      </div ></>)
}

export default Navbar;