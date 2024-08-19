import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Inventory from "./components/Inventory";
import Admin from "./components/Admin";
import { Outlet, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<><NavBar/><Outlet/></>}>
        <Route index element={<Home/>} />
        <Route path="inventory" element={<Inventory/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

function NoMatch() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  )
}