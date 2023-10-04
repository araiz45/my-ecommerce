import { Carousel } from "react-responsive-carousel";
import { BASEURL } from "../../axiosConfig";
import { useState, useEffect } from 'react'


const Main = ({ item }) => {
  const [items, setItems] = useState(null)
  useEffect(() => {
    if (Object.keys(item).length > 0) {
      setItems(item)
    }
  }, [item])
  return (
    <div className="p-11">
      {items && <><div className="grid grid-cols-2 min-h-fit">
        <div>
          <Carousel >
            {items.attributes.img.data.map((img) => (
              <>
                <div>
                  <img src={BASEURL + img.attributes.formats.large.url} />

                </div>

              </>
            ))}
          </Carousel>
        </div>
        <div className="p-11">
          <h1 className="text-3xl font-bold my-3">{items.attributes.name}</h1>
          <p className="text-xl text-secondary mt-3">${items.attributes.price}</p>
          <h4 className="text-2xl font-bold mt-3">Intro</h4>
          <h1>{items.attributes.intro}</h1>
        </div>
      </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Description</h1>
          <h1 className="">{items.attributes.desc}</h1>

        </div></>}


    </div>
  )
}

export default Main;