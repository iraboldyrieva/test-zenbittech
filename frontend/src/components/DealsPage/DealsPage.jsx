import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals } from "../../features/deals/dealsSlice";
import "./Dealspage.css";

function DealsPage() {
  const dispatch = useDispatch();
  const { deals, status, error } = useSelector((state) => state.deals);

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading deals...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="deal-title">Open Deals</h2>
      <div className="deal-grid">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card">
            <div className="image-container">
              <img
                src={`http://localhost:5001/${deal.image}`}
                alt={deal.title}
              />
              <div className="deal-card-info">
                <h3>{deal.title}</h3>
                <div className="deal-card-content">
                  <p>Price: {deal.price} Dhs</p>
                  <p>Ticket: {deal.ticket} Dhs</p>
                  <p>Yield: {deal.yield}%</p>
                  <p>Days Left: {deal.days}</p>
                  <p>Sold: {deal.sold}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsPage;
