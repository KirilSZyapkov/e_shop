import { Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

import { useShopingCart } from "../context/ShopingCartContext";

type ShopingCartItemProps = {
  id: number;
  quantity: number;
};

import items from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

function ShopingCartItem({ id, quantity }: ShopingCartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShopingCart();

  const item = items.find((i) => i.id === id);
  if (item === undefined) return null;

  return (
    <Col className="d-flex flex-wrap shadow border-secondary bg-white p-3 align-items-center">
      <img
        src={item?.imgUrl}
        style={{ minWidth: "250px", maxWidth: "250px", height: "200px", objectFit: "cover" }}
        className="me-3"
      />

      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <div className="d-flex align-items-center justify-content-between mt-5 mobile" style={{ gap: "0.5rem" }}        >
          <div>
            <span className="fs-2">Price:</span>
            <span className="fs-4 text-muted ms-2">
              {formatCurrency(item.price)}
            </span>
          </div>
          <div className="d-flex align-items-center flex-wrap" style={{ gap: "1rem" }}>
            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            <span>{quantity} in cart</span>
            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            <Button variant="danger" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ShopingCartItem;
