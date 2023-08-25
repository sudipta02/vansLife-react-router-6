import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();

  const HostVan = ({ name, price, imageUrl, id }) => {
    return (
      <Link to={id}>
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
