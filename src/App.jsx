import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Show from "./Components/Show";
import Contact from "./Components/Contact";
import CartPopup from "./Components/CartPopup";

import Menu from "./pages/Menu";

import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

const App = () => {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="min-h-screen w-full bg-white">
          {/* Navigation */}
          <Navbar />

          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Show />
                  <Contact />
                </>
              }
            />

            {/* MENU PAGE */}
            <Route path="/menu" element={<Menu />} />

            {/* HELP PAGE (later) */}
            {/* <Route path="/help" element={<Help />} /> */}
          </Routes>

          {/* GLOBAL CART POPUP */}
          <CartPopup />
        </div>
      </OrderProvider>
    </CartProvider>
  );
};

export default App;
