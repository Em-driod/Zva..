import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage"; // You wrote Dashboard before. Correct to DashboardPage
import Layout from "./components/Layout";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service ";
import TogglePlans from "./components/plansCard";
import PaymentForm from "./components/PaymentForm";
import Register from "./components/Register";

const App: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/lay");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lay" element={<Layout><DashboardPage /></Layout>} />
          <Route path="/about" element={<AboutPage quote="Your inspirational quote here" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/tog" element={<TogglePlans />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </main>

      {!isAdminPage && <Footer />}
    </div>
  );
};

export default App;



