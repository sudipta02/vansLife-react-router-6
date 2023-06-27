import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LeftArrowIcon from "../../ui-elements/LeftArrowIcon";

export default function VanDetail() {
  const [vanDetail, setVanDetail] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      await fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((result) => setVanDetail(result.vans));
    };
    dataFetch();
  }, [params.id]);

  const { imageUrl = null, type = null, name, price, description } = vanDetail;

  return (
    <>
      <div className="van-details-container">
        <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
          <div className="go-back">
            <LeftArrowIcon width={"1.5rem"} height={"1.5rem"} /> <p>Go back</p>
          </div>
        </button>
        <img src={imageUrl} className="van-image" />
        <p className={type} style={{ marginTop: ".75rem" }}>
          {type}
        </p>
        <h2 style={{ marginTop: ".75rem" }}>{name}</h2>
        <p style={{ marginTop: ".75rem" }}>₹{price}/day</p>
        <p style={{ marginTop: ".75rem" }}>{description}</p>
        <button className="primary-btn">Rent this van</button>
      </div>
    </>
  );
}
