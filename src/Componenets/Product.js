import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import data from "./Data";

const Product = () => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    boxItems: {
      padding: "30px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <Box sx={style.container}>
      <h1>Product page</h1>
      <Grid container>
        {data.map((obj) => {
          return (
            <Box item xs={6} sx={style.boxItems}>
              <img src={obj.image} width="200px" />
              <h4>{obj.name}</h4>
              <Link to={`/protectedproduct/${obj.id}`}>Go to Details</Link>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Product;
