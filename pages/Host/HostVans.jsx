import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      await fetch("/api/host/vans")
        .then((res) => res.json())
        .then((result) => setHostVans(result.vans));
    };
    dataFetch();
  }, []);

  const HostVan = ({ name, price, imageUrl, id }) => {
    return (
      <Link to={`/host/vans/${id}`}>
        <div className="host-van-item-container">
          <img src={imageUrl} className="host-van-img" />
          <div className="host-van-info">
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p>₹{price}/day</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <h1 style={{ paddingLeft: "20px", marginBottom: "0", marginTop: "30px" }}>
        Your listed vans
      </h1>
      <div className="host-vans-list-container">
        {hostVans.map(({ name, price, imageUrl, id }) => (
          <HostVan price={price} name={name} imageUrl={imageUrl} id={id} />
        ))}
      </div>
    </>
  );
}
