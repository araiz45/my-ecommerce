import Card from "./Card";
import { instance } from "../../axiosConfig";
import { useSelector, useDispatch } from 'react-redux'
import { setItems } from "../../slice";
import { useState, useEffect } from 'react'
import CarouselImg from "./Carousel";
import Category from "./Category";
const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items)
  // console.log(items)
  const getItems = async () => {
    try {
      const response = await instance.get('/api/products?populate=*')
      // console.log(response.data.data)
      const data = response.data.data;
      dispatch(setItems(data))
    } catch (error) {
      console.log("Unable to fetch products")
    }
  }
  useEffect(() => {
    getItems()
  }, [])
  return (
    <>
      <CarouselImg />
      <Category />
      <div className="grid grid-cols-3 gap-11 justify-center items-center p-11">
        {
          items.map((item) => (
            <Card item={item} key={item.id} />

          ))
        }
      </div>
    </>
  )
}

export default Home;