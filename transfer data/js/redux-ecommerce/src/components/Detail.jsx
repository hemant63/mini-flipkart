import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addTocart } from "../action";
import Footer from "./Footer";

function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch (error) {
      alert(error);
    }
  }, []);

  console.log(typeof data?.rating?.rate, "data");

  return (
    <div style={{ display: "flex", paddingTop: "52px" }}>
      <span>
        <img
          src={data?.image}
          style={{ width: "400px", padding: "20px" }}
          alt={data?.title}
        />
      </span>
      <span style={{ padding: "0px" }}>
        <h1>{data?.title}</h1>
        <h2>Price: Rs.{data?.price}</h2>
        <Button variant="contained" size="large" title="cart">
          Buy
        </Button>
        &nbsbp
        <Button
          variant="contained"
          size="large"
          title="cart"
          onClick={() => dispatch(addTocart(data))}
        >
          Add to Cart
        </Button>
        <p>{data?.description}</p>
        <Rating name="read-only" value={data?.rating?.rate} size="large" />
        <h4>{data?.rating?.count} users</h4>
      </span>
      <Footer />
    </div>
  );
}

export default Detail;
