import React from "react";
import { Outlet } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./components/destination";
import DestinationDetails from "./components/destinatindetails";
import BookNow from "./components/BookNow";
import Login from "./pages/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import AuthPage from "./pages/AuthPage";
import Signup from "./pages/Signup";
import Wishlist from "./components/Wishlist";
import DestinationSearch from "./components/DestinationSearch";


const App = () => {
  return (
    <AuthProvider>
        <div className="main-content">
            <Navbar />
            <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/booknow' element={<BookNow/>}/>
              <Route path="/destinationsearch" element={<DestinationSearch />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/destination/:id" element={<DestinationDetails />} />
              <Route path="/wishlist" element={<Wishlist/>} />
              <Route path="contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Outlet />
    </div>
   </div>
    </AuthProvider>
  );
};

export default App;

