import React from "react";
import { useSelector } from "react-redux";

import DealsPage from "../DealsPage/DealsPage";
import "./MainPage.css";

function MainPage() {
  // Get the user from the Redux store
  const user = useSelector((state) => state.auth.user);

  return (
    <main>
      <div className="main">
        <h1>The chemical negatively charged</h1>
        <p>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged.
        </p>
        {!user && (
          <button onClick={() => (window.location.href = "/login")}>
            Get Started
          </button>
        )}
      </div>
      {user && (
        <div className="deals-container">
          <DealsPage />
        </div>
      )}
    </main>
  );
}

export default MainPage;
