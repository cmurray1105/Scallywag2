import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import ProductModal from './ProductModal';

const Products = ({ loaded, products, addToCart, cartItems}) => {
  const [open, setOpen] = React.useState(false);
  const [quantity, handleChange] = React.useState("0");
  const [customerName, handleNameChange] = React.useState("");
  const [currentProduct, setProduct] = React.useState({});
  console.log("T/F?", !cartItems)
  let selectedQuantity = 0
  let currentQuantity = currentProduct.quantity

  const useStyles = makeStyles({
    root: {
      width: 250,
      marginTop: 25,
      marginBottom: 25,
    },
    media: {
      height: 250,
      width: 250,
    },
  });

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if(cartItems[currentProduct.product_name]){
    selectedQuantity = cartItems[currentProduct.product_name].quantity
     currentQuantity = currentProduct.quantity - selectedQuantity
  }

  // if(cartItems.length > 0){
  //   if(cartItems[currentProduct.product_name]){
  //     console.log("CI AND STUFF", cartItems[currentProduct.product_name])
    // }
  // } else {
    // console.log("nope", currentProduct)
  // }

  const handleSubmit = (event) => {
    console.log("currentQuantity", currentQuantity, "selectedQuantity", selectedQuantity)
    event.preventDefault();
    console.log("currentProduct.quantity", currentProduct.quantity, "selectedQuantity", selectedQuantity)
    if ((currentQuantity - selectedQuantity) < 0){

      alert(`Please select another quantity. Only ${currentQuantity} left!`)
    } else {
    addToCart({
      productName: currentProduct.product_name,
      quantity: parseInt(quantity),
      price: currentProduct.price,
      id: currentProduct.id,
      originalQuantity: currentProduct.quantity
    });
    // getProducts(currentProduct.category)
    handleClose();
  }
}
  let createPullDown = () => {
      let items = [];
      for (let i = 0; i <= currentQuantity; i++) {
           items.push(<option value={i}>{i}</option>);
      }
      return items;
  }

  const body = (
    <div className="paper">
      <h2 id="simple-modal-title">{currentProduct.product_name}</h2>
      <div className="order-form">
      {currentQuantity < 5 ? <div>
          Only {currentQuantity} left
        </div> : null}
        <form onSubmit={handleSubmit}>

          <label>
            Quantity:
            <select onChange={(e) => handleChange(e.target.value)}>
              {createPullDown()}
            </select>
          </label>
          <Button type="submit">
          <AddShoppingCartIcon />
          </Button>
        </form>
      </div>
    </div>
  );
  let productData = [];
  console.log(loaded);
  if (!loaded) {
    return null;
  } else {
    productData = products;
    return (
      <div className="box-container">
        <Box
          display="flex"
          // flexwrap="nowrap"
          p={1}
          m={1}
          // bgcolor="background.paper"
          css={{ maxWidth: 300 }}
        >
          {productData.map((product) => {
            console.log(product);
            let priceString = product.price.toString();
            console.log(priceString.length);
            if (priceString.includes(".")) {
              if (priceString.split(".")[1].length === 1) {
                priceString += "0";
              }
            } else {
              priceString += ".00";
            }

            return (
              <Box p={1} >
              <div className="cardContainer">
                <Card
                  className={classes.root}
                  onClick={() => {
                    setProduct(product);
                    handleOpen();
                  }}
                >
                <Box p={1}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.image_url}
                      title={product.product_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.product_name}
                      </Typography>
                      {/* <ProductModal product={product} addToCart={addToCart}/> */}

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        ${priceString}
                        {/* <img className='card-image' src={product.image_url} /> */}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                  </Box>
                </Card>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </div>
              </Box>
            );
          })}
        </Box>
      </div>
    );
  }
};
export default Products;
