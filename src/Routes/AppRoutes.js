import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import RegClient from "./components/RegClient";
import Login from "./components/Login";
import About from "./components/About";
import RegistrationForm from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { Help } from "@mui/icons-material";

const isLoggedIn = () => {
  return !!localStorage.getItem("accessToken"); // Return true if logged in
};
const PrivateRoute = ({ path, element }) => {
  // const navigate = useNavigate();

  if (!isLoggedIn()) {
    // navigate("/Login"); // Redirect to the login page
    return null; // prevent rendering the protected component
  }

  // If the user is logged in, render the protected component
  return <Route path={path} element={element} />;
};
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes can be accessed without logIn */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="RegClient" element={<RegClient />} />
        <Route path="Login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="RegistrationForm" element={<RegistrationForm />} />
        <Route path="help/*" element={<Help />}></Route>
        <Route path="Contact/*" element={<Contact />}></Route>
        <Route path="FAQ/*" element={<FAQ />}></Route>
      </Route>

      {/* Protected Routes */}
      <PrivateRoute path="/" element={<RootLayout />}>
        <Route path="clientRequest" element={<clientRequest />} />
      </PrivateRoute>
    </Routes>
  );
};

export default AppRoutes;
