import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./ClientID.module.css";

function ClientID() {
  const [user, setUser] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setUser(response.data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(user);

  return (
    <>
      <div className={styles.containerUser}>
        <h1>{user?.message?.name}</h1>
        <p><span>ID:</span> {user?.message?._id}</p>
        <p><span>State:</span>{user?.message?.state}</p>
        <p><span>Country:</span>{user?.message?.country}</p>
        <p><span>City:</span>{user?.message?.city}</p>
        <p><span>Category:</span>{user?.message?.category}</p>
        <p><span>Ibu:</span>{user?.message?.ibu}</p>
      </div>
    </>
  );
}

export default ClientID;