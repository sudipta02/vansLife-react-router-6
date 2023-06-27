import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      await fetch("/api/vans")
        .then((res) => res.json())
        .then((result) => setVans(result.vans));
    };
    dataFetch();
  }, []);

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
      <div className="vans-container">
        {vans.map((van) => {
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
