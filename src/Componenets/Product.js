import React from 'react';
import data from './Data';
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      {data.map(obj => {
        return (
          <div key={obj.id}>
            <img src={obj.image} width='200px'/>
            <h4>{obj.name}</h4>
            <Link to={`/protectedproduct/${obj.id}`}>Go to Details</Link>
            {/* <Link to={`/product/${obj.id}`}>Go to Details</Link> */}
          </div>
        )
      })}
    </div>
  )
}

export default Product
