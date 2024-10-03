import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/LoginPage/SignUpPage";
import MainPage from "./components/MainPage/MainPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
