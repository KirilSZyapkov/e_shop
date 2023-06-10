import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";

import items from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShopingCart();
  const item = items.find((i) => i.id === id);
  if (item === undefined) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 0 && <span className="text-muted">x{quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price)}
        </div>
      </div>
      <div>{formatCurrency(item?.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
