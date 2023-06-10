import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type HomeItemsProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
};

function HomeItems({ id, name, price, imgUrl, description }: HomeItemsProps) {

  const {getItemQuantity, decreaseCartQuantity, increaseCartQuantity,removeFromCart} = useShopingCart();
  const quantity:number = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-center aligne-items-center justify-content-between">
        <Card.Title className="d-flex justify-content-center aligne-items-center justify-content-between">
          <div className="me-2">{name}</div>{" "}
          <div>Price: {formatCurrency(price)}</div>
        </Card.Title>

        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>Add to Cart</Button>
          ) : 
          (<div className="d-flex flex-column align-items-center " style={{gap:"0.5rem"}}>
            <div className="d-flex align-items-center" style={{gap: "1rem"}}>
              <Button onClick={()=>increaseCartQuantity(id)} >+</Button>
              <span>{quantity} in cart</span>
              <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
            </div>
            <div>
              <Button variant="danger" onClick={()=> removeFromCart(id)}>Remove</Button>
            </div>
          </div>)}
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomeItems;
