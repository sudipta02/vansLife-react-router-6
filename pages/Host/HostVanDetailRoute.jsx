import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetailRoute() {
  const [imageUrl, type, name, price, description] = useOutletContext();
  return (
    <>
      <div className="host-van-detail-route">
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
      </div>
    </>
  );
}

export default HostVanDetailRoute;
