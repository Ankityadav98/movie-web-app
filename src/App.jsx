import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function Card(props) {
  const [hasLiked, setHasLiked] = React.useState(false);
  function evtListener() {
    setHasLiked((hasLiked) => !hasLiked);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <button onClick={evtListener}>{hasLiked ? "❤️" : "🤍"}</button>
    </div>
  );
}
export default function App() {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} iscool={true} />
      <Card title="Avengers" />
      <Card title="Hera pheri" />
    </div>
  );
}
