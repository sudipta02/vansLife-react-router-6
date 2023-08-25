import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Outlet,
  NavLink,
  useLoaderData,
} from "react-router-dom";
import LeftArrowIcon from "../../ui-elements/LeftArrowIcon";
import { getHostVans } from "../../api";

export function loader({ params }) {
  return getHostVans(params.id);
}

export default function HostVanDetail() {
  const vanDetail = useLoaderData();
  const navigate = useNavigate();
  debugger;

  const { imageUrl = null, type = null, name, price, description } = vanDetail;

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "1rem", marginLeft: "20px" }}
      >
        <div className="go-back">
          <LeftArrowIcon width={"1.5rem"} height={"1.5rem"} /> <p>Go back</p>
        </div>
      </button>
      <div
        style={{
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="host-van-details-container">
          <img src={imageUrl} className="host-van-detail-image" />
          <div style={{ marginLeft: "20px", alignSelf: "center" }}>
            <p className={type} style={{ marginTop: ".75rem" }}>
              {type}
            </p>
            <h2 style={{ marginTop: ".75rem" }}>{name}</h2>
            <p style={{ marginTop: ".75rem" }}>₹{price}/day</p>
          </div>
        </div>
        <HostLayout />
        <Outlet context={[imageUrl, type, name, price, description]} />
      </div>
    </>
  );
}

function HostLayout() {
  const activeLinkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
}