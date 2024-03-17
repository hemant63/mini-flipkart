import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocart, removeCart } from "../action";

const Cards = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cartItems);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleGetProducts = () => {
    try {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleAddtoCart = (item) => {
    item = {
      ...item,
      quantity: 1,
    };
    console.log(item, "item");
    return dispatch(addTocart(item));
  };

  return (
    <Grid container justifyContent="right" spacing={0} item>
      {data?.map((item, i) => (
        <Card key={i} style={{ width: "25%", height: "30", padding: "20px" }}>
          <CardMedia
            component="img"
            alt="img"
            height="300"
            image={item?.image}
            onClick={() => navigate(`detail/${item?.id}`)}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              MRP: Rs.{item.price}/-
              <br />
              {item.rating.rate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Buy
            </Button>
            {cartItems?.find((value) => {
              return value.id === item.id;
            }) ? (
              <Button
                variant="contained"
                size="small"
                title="cart"
                onClick={() => dispatch(removeCart(item.id))}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                size="small"
                title="cart"
                onClick={() => {
                  handleAddtoCart(item);
                }}
              >
                Add to Cart
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default Cards;
