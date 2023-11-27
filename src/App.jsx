import React from "react";
import MarketPlace from "./pages/marketplace/MarketPlace";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import MarketPlaceLayout from "./layout/MarketPlaceLayout";
import Reviews from "./pages/marketplace/Reviews";
import { PetDetails } from "./pages/marketplace/PetDetails";

function App() {
  return (
    <>
      <Routes>
        {/* ******************* */}
        {/* sharing the same layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* nested layout */}
          <Route path="marketplace" element={<MarketPlaceLayout />}>
            <Route index element={<MarketPlace />} />
            <Route path=":petId" element={<PetDetails />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* *************************** */}
        </Route>
        {/* ************************************ */}
        {/* ********************************** */}

        {/* about route */}
        <Route path="/about" element={<About />} />
        {/* ****************************************** */}
      </Routes>
    </>
  );
}

export default App;
