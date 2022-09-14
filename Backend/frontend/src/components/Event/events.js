import React from "react";
import "./events.css";
import { Link } from "react-router-dom";
import Eventcarousel from "./carousel/eventcarousel";
import Eventcard from "./cards/eventcard";
export default function Events() {
  return (
    <div style={{backgroundColor: "#edeef0"}}>
      <Eventcarousel />
      <Eventcard />
    </div>
  );
}
