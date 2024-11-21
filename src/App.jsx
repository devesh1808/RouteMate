import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { ProductList } from "./components/ProductList.jsx";
import { ProductDetail } from "./components/ProductDetail.jsx";
import { Contact } from "./components/Contact.jsx";
import { Admin } from "./components/Admin.jsx";
import "./App.css";

export default function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/products" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
