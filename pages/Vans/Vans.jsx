import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const dataFetch = async () => {
      await fetch("/api/vans")
        .then((res) => res.json())
        .then((result) => setVans(result.vans));
    };
    dataFetch();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const Van = ({ id, name, price, imageUrl, type }) => {
    return (
      <div className="van-item" key={id}>
        <Link
          to={id}
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
          <img src={imageUrl} className="van-image" />
          <div className="van-item-info">
            <div>
              <p className="van-item-title">{name}</p>
              <p className={type}>{type}</p>
            </div>
            <div>
              <p className="van-item-price">₹{price}</p>
              <p className="van-item-day">/day</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <h1 className="van-items-title">Explore our van options</h1>
      <div style={{ marginLeft: "20px" }}>
        <button
          className={`van-filter simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          simple
        </button>
        <button
          className={`van-filter rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          rugged
        </button>
        <button
          className={`van-filter luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          luxury
        </button>
        {typeFilter ? (
          <button
            className="clear-filter"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="vans-container">
        {displayedVans.map((van) => {
          const { name, price, description, imageUrl, type, id } = van;
          return (
            <Van
              key={id}
              name={name}
              price={price}
              description={description}
              imageUrl={imageUrl}
              type={type}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
}
