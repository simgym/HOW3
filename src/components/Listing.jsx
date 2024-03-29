import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { productAction } from "../store/ProductStore";
import { Link } from "react-router-dom";
import "./Listing.css";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Listing = () => {
  const [productListings, setProductListings] = useState([]);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Error fetching products API");
      }

      const data = await response.json();

      setProductListings(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="listing-main">
      <h1>ALL PRODUCTS</h1>
      <div className="listing-wrapper">
        {productListings.map((product, index) => (
          <motion.li
            key={index}
            className="listing-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => dispatch(productAction.productId(product.id))}
          >
            <Link to={`/details/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <h3>{`$ ${product.price}`}</h3>
            </Link>
          </motion.li>
        ))}
      </div>
    </main>
  );
};

export default Listing;
