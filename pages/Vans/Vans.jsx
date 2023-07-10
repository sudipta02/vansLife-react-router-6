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

  const Van = ({ id, name, price, imageUrl, type }) => {
    return (
      <div className="van-item" key={id}>
        <Link to={`/vans/${id}`}>
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
          className="van-filter simple"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          simple
        </button>
        <button
          className="van-filter rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          rugged
        </button>
        <button
          className="van-filter luxury"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          luxury
        </button>
        <button className="clear-filter" onClick={() => setSearchParams({})}>
          Clear filters
        </button>
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
