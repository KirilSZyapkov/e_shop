import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";


import Home from "./pages/Home";
import About from "./pages/About";
import ShopingCart from "./pages/ShopingCart";
import Header from "./components/Header";
import { ShoppingCartProvider } from "./context/ShopingCartContext";


function App() {
  return (
   
      <ShoppingCartProvider>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shoping-cart" element={<ShopingCart />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
   
  );
}

export default App;
