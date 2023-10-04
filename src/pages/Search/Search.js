import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import Card from '../Home/Card'
const Search = () => {
  const items = useSelector((state) => state.items)
  const [value, setValue] = useState('')
  const [arrayValue, setArrayValue] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
    if (value.length > 0) {
      const filter = items.filter((item) => {
        return item.attributes.name === value;
      })
      setArrayValue(filter)
      console.log(items)
      console.log(filter)
    }
  }
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center my-11 gap-3" >
        <input type="text" placeholder="Enter your query" className="input input-bordered input-primary w-full max-w-xs" value={value} onChange={e => setValue(e.target.value)} />
        <button className="btn btn-primary" type='submit' onClick={handleSubmit}>Search</button>

      </div>
      <div>
        {arrayValue.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Search;