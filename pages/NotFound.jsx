import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div style={{ flex: "1 0 auto", textAlign: "center" }}>
      <h1>Sorry, the page you were looking for was not found. </h1>
      <Link
        to={"/"}
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "2px",
          color: "white",
          background: "#252525",
        }}
      >
        Return to home
      </Link>
    </div>
  );
}
