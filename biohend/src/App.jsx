import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Cart from "./components/cart/Cart";
import Favorites from "./components/favorites/Favorites";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shopping-cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
