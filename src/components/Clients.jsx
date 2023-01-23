import axios from 'axios';
import React from 'react';
import styles from "./Clients.module.css";
import Card from "./Card";

function Clients() {
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    responseProduct();
  }, []);

  const responseProduct = async () => {
    axios.get("http://localhost:3000/products")
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  }

  console.log(product);

  return (
    <div className={styles.grid}>
      {product && product.message.map((item) => (
        <Card key={item._id} item={item} />
      ))}
      {product && product.message.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Clients;