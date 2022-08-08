import React from 'react'
import {useParams, Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import data from './Data'

const ProductPage = () => {

    const {productId} = useParams()
    const search = data.find(search => search.id === productId)
    const {name, image} = search;

    const style = {
      box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      },
    }

  return (
      <Box sx={style.box}>
        <h1>Product Description Page</h1>
        <img src={image} width='400px' />
        <h3>{name}</h3>
      <Link to='/protectedproduct'>Go Back</Link>
    </Box>
  )
}

export default ProductPage;