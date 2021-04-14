import React from "react";

import Navbar from "../components/navbar/Navbar";
import PriceCards from "../components/Pricing/PriceCards";

export default function Pricing(props) {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#F0F8FF" }}>
      <Navbar signedIn={props.signedIn} logOut={props.logOut} />
      <PriceCards />
    </div>
  );
}
