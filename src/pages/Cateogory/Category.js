import { useLocation } from "react-router-dom";
import Card from "../Home/Card";
import { useSelector, useDispatch } from 'react-redux'

const Category = () => {
  const items = useSelector((state) => state.items)
  const location = useLocation()
  console.log(location.pathname.slice(1,))
  console.log(items)
  const category = items.filter((item) => {
    return item.attributes.category === location.pathname.slice(1,)
  })
  return (
    <div className="w-full">

      <div className="grid grid-cols-3 p-11 gap-11">
        {category.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
export default Category;