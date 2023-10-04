import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import Main from "./Main";

const Product = () => {
  const location = useLocation()
  const [item, setItem] = useState({})
  const items = useSelector((state) => state.items)
  const getUrl = location.pathname.split("/")
  const url = getUrl[2]
  // const splitUrl = url.split('++2++')
  // const joinUrl = splitUrl.join(' ');


  useEffect(() => {
    const getItem = items.filter((item) => {
      return item.attributes.slug === url;
    })
    console.log(getItem[0])
    setItem(getItem[0])
  }, [])
  console.log(item)
  return (
    <>
      <Main item={item} />
      {/* <div>hello</div> */}
    </>
  )
}

export default Product;