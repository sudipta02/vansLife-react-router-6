import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetailPhotos() {
  const [imageUrl, type, name, price, description] = useOutletContext();
  return (
    <>
      <div className="host-van-detail-route">
        <img src={imageUrl} width={"200px"} />
      </div>
    </>
  );
}

export default HostVanDetailPhotos;
