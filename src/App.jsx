import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { ProductList } from "./components/ProductList.jsx";
import { ProductDetail } from "./components/ProductDetail.jsx";
import { Contact } from "./components/Contact.jsx";
import { Admin } from "./components/Admin.jsx";
import { ContactIn } from "./components/ContactIn.jsx";
import { ContactEu } from "./components/ContactEu.jsx";
import { ContactUs } from "./components/ContactUs.jsx";
import { ContactOther } from "./components/ContactOther.jsx";
import { PageNotFound } from "./components/PageNotFound.jsx";
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
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactOther />} />
          </Route>
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/products" />}
          />
          <Route path="*" element={<PageNotFound title="404" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
