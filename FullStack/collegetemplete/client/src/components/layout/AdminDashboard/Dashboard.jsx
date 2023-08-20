import React, {  useState } from "react";
import "./Dashboard.css";
import Header from "./Header/AdHeader";
import Sidebar from "./Sidebar/Sidebar";
import Content from './Content/Content'

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [active, setActive] = useState(1);
  return (
    <>
      <section className="dashboard_main">
        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Sidebar active={active} setActive={setActive} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Content active={active} setActive={setActive}  setIsDrawerOpen={setIsDrawerOpen} />
      </section>
    </>
  );
};

export default Dashboard;
