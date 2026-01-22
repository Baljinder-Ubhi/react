import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";

function App() {
  return(
    <div>
      <h1>Adding and reusing componets</h1>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </div>
  )
}

function Pizza() {
  return (
    <div>
      <img src="/images/spinaci_pizza.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
