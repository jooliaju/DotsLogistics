import React from "react";
import Dropdown from "../components/Dashboard/dropdown";
import MainDashboard from "../components/Dashboard/MainDashboard";
import UserInfo from "../components/Dashboard/userInfo";
import Footer from "../components/footer/Footer";

import Navbar from "../components/navbar/Navbar";
import SideNav from "../components/navbar/SideNav";

export default function Dashboard(props) {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#F0F8FF" }}>
      <Navbar signedIn={props.signedIn} logOut={props.logOut} />
      <SideNav />
      <UserInfo />
      <Dropdown />
      <MainDashboard />
      <Footer />
    </div>
  );
}
