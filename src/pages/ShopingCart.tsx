import items from "../data/items.json";

import { useShopingCart } from "../context/ShopingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button, Row, Stack } from "react-bootstrap";
import ShopingCartItem from "../components/ShopingCartItem";

import { loadStripe } from "@stripe/stripe-js";

function ShopingCart() {
  const { cartItems, clearCartItems } = useShopingCart();

  let listItems = items.filter(
    (item) => item.id === cartItems.find((i) => i.id === item.id)?.id
  );

  const filteredList = cartItems.filter(
    (item) => item.id === listItems.find((i) => i.id === item.id)?.id
  );

  listItems.map((item) => {
    const findItem = filteredList.find((i) => i.id === item.id);

    if (item.id === findItem?.id) {
      
      return Object.assign(item, findItem);
    }
  });

  async function handleClick() {
    const stripePromis = await loadStripe(
      "pk_test_51L0t34LCIiqvQfkBhUqZXQyvklKTBpznH0D58nkQhBeIKaETqeXpNqlMuuS0xguX4mKgtBXIl7xI17B68olcRZps00N3o5W8T3"
    );

    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(listItems),
    })
      .then((value) => {
        if (!value.ok) {
          throw new Error(value.statusText);
        }
        const data = value.json();
        return data;
      })
      .then((data) => {
        stripePromis?.redirectToCheckout({ sessionId: data.id });
        clearCartItems();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Stack gap={4}>
      {cartItems.length === 0 ? (
        <h1>Your cart is empty!</h1>
      ) : (
        cartItems.map((i) => (
          <Row key={i.id} gap={2}>
            <ShopingCartItem key={i.id} {...i} />
          </Row>
        ))
      )}
      <div className="ms-auto fw-bold fs-5">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
      <div className="text-end mt-2">
        <Button
          variant="outline-primary"
          onClick={() => handleClick()}
          className="mb-5"
        >
          To Paymen
        </Button>
      </div>
    </Stack>
  );
}

export default ShopingCart;
