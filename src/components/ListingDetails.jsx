import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ListingDetails.css";

const variants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

const ListingDetails = () => {
  const [detailObj, setDetailObj] = useState({});

  const productId = useSelector((state) => state.productReducer.id);

  const url = `https://fakestoreapi.com/products/${productId}`;

  const fetchDetails = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("error in detail API");
      }
      const data = await response.json();
      setDetailObj(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [productId]);

  return (
    <main className="detail-wrapper">
      <motion.img
        src={detailObj.image}
        alt="Image not available"
        variants={variants}
        initial="hidden"
        animate="visible"
      />
      <div className="detail-content">
        <h1>{detailObj.title}</h1>
        <h3>{detailObj.description}</h3>
        <span className="product-price">
          <h4>Price :</h4>
          <p>$ {detailObj.price}</p>
        </span>
        <span className="detail-buttons">
          <motion.button variants={variants} whileHover="hover" whileTap="tap">
            Add to cart
          </motion.button>
          <motion.button variants={variants} whileHover="hover" whileTap="tap">
            Buy now
          </motion.button>
        </span>
      </div>
    </main>
  );
};

export default ListingDetails;
