import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Services from "./pages/home/Services/Services";
import Login from "./pages/login/Login/Login";
import Register from "./pages/login/register/Register";
import Contact from "./pages/ContactUs/Contact";
import Header from "./pages/Shared/Header/Header";
import RequireAuth from "./pages/requireAuth/RequireAuth";
import Booking from "./pages/booking/Booking";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="footer" element={<Footer />} />
        <Route
          path="/service/:booking"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
