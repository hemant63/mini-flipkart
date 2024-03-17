import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../action";
import { incQuantity, decquantity } from "../action/index";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cartItems);

  const sum = cartItems?.reduce((total, item) => {
    return total + item?.price * item?.quantity;
  }, 0);
  console.log(cartItems);

  return (
    <>
      <div className="productCard">
        <div>
          <table className="table">
            <tbody>
              {cartItems?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="table-column">
                      <img src={item.image} alt="img" className="pic"></img>
                    </td>
                    <td>
                      <ul>
                        <li className="item">{item?.title}</li>
                        <li className="item">
                          {(item?.price * item?.quantity).toFixed(2)}
                        </li>
                        <li className="item">
                          <button
                            onClick={() => dispatch(incQuantity(item?.id))}
                          >
                            +
                          </button>
                          <button>{item?.quantity}</button>
                          <button
                            onClick={() => dispatch(decquantity(item?.id))}
                          >
                            -
                          </button>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li className="item">{item?.rating?.rate}⭐</li>
                        <li className="item">
                          <button className="buy">Shop</button>
                        </li>
                        <li className="item">
                          <button onClick={() => dispatch(removeCart(item.id))}>
                            Remove from cart
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ padding: "30px" }}>
          <h3>Total Amount:- {sum.toFixed(2)}</h3>
          <button className="buy">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
