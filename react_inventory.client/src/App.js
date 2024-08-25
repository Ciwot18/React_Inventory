import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Inventory from "./components/Inventory";
import Admin from "./components/Admin";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <Link to="/" className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}