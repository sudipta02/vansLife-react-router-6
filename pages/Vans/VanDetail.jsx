import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  useLoaderData,
} from "react-router-dom";
import LeftArrowIcon from "../../ui-elements/LeftArrowIcon";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const vanDetail = useLoaderData();
  // const [vanDetail, setVanDetail] = useState({});
  const location = useLocation();

  const { imageUrl = null, type = null, name, price, description } = vanDetail;

  const searchLinkState = location.state?.search || "";
  const typeLinkState = location.state?.type || "all";

  return (
    <>
      <div className="van-details-container">
        <Link
          to={`..${searchLinkState}`}
          relative="path"
          style={{ marginBottom: "1rem" }}
        >
          <div className="go-back">
            <LeftArrowIcon width={"1.5rem"} height={"1.5rem"} />{" "}
            <p>Back to {typeLinkState} vans</p>
          </div>
        </Link>
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
