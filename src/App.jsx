import Listing from "./components/Listing";
import ListingDetails from "./components/ListingDetails";
import Logo from "./components/Logo";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const [showComp, setShowComp] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <Listing /> },
    { path: "/details/:id", element: <ListingDetails /> },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComp(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Logo />
      {showComp && (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <RouterProvider router={router} />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;
