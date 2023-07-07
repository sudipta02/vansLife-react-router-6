import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetailPricing() {
  const [imageUrl, type, name, price, description] = useOutletContext();
  return (
    <>
      <div className="host-van-detail-route">
        <p>Price: ₹{price}/day</p>
      </div>
    </>
  );
}

export default HostVanDetailPricing;
