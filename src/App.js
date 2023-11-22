import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Components

// Pages
import RegClient from "./Pages/RegClient";
import RegOwner from "./Pages/RegOwner";
import RegAgent from "./Pages/RegAgent";

import Login from "./Pages/Auth/Login";
import RegistrationForm from "./Pages/Auth/RegistrationForm";

import Client from "./Pages/Dashboards/Client/Client";
import Owner from "./Pages/Dashboards/Owner";
import Agent from "./Pages/Dashboards/Agent";

import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import { Help } from "@mui/icons-material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="RegClient" element={<RegClient />} />
      <Route path="RegOwner" element={<RegOwner />} />
      <Route path="RegAgent" element={<RegAgent />} />
      <Route path="Client" element={<Client />} />
      <Route path="Owner" element={<Owner />} />
      <Route path="Login" element={<Login />} />
      <Route path="Agent" element={<Agent />} />
      <Route path="about" element={<About />} />
      <Route path="RegistrationForm" element={<RegistrationForm />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
