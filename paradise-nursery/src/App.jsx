import React, { useState } from "react";
import Header from "./components/Header.jsx";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Header setPage={setPage} />
      {page === "home" && <LandingPage setPage={setPage} />}
      {page === "products" && <ProductPage setPage={setPage} />}
      {page === "cart" && <CartPage setPage={setPage} />}
    </div>
  );
};

export default App;