import React from 'react'
import {useParams, Link} from 'react-router-dom';
import data from './Data'

const ProductPage = () => {

    const {productId} = useParams()
    const search = data.find(search => search.id === productId)
    const {name, image} = search;

  return (
      <div>
        <h3>Product Description Page</h3>
        <img src={image} width='200px'/>
        <h4>{name}</h4>
      <Link to='/protectedproduct'>Go Back</Link>
      {/* <Link to='/product'>Go Back</Link> */}
    </div>
  )
}

export default ProductPage;