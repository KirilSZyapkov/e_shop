import React from "react";
import { Button, Nav, Offcanvas, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import CartItem from "./CartItem";

import { useShopingCart } from "../context/ShopingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

import items from "../data/items.json";

function ShopingList() {
  const { closeCart, isOpen, cartItems } = useShopingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <div className="d-flex justify-content-end">
            <NavLink
              className="d-flex justify-content-center text-end mt-2 btn btn-outline-primary"
              to="/shoping-cart"
              style={{ width: "150px" }}
              onClick={closeCart}
            >
              To Shoping Cart
            </NavLink>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShopingList;
