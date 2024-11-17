import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { ProductList } from "./components/ProductList.jsx";
import { ProductDetail } from "./components/ProductDetail.jsx";
import { Contact } from "./components/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/1001" element={<ProductDetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
