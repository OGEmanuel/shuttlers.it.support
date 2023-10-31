"use client";

import { ArrowRightIcon } from "lucide-react";
import CustomButton from "../components/button";
import DashLinks from "../components/dashboard-links";
import { useState } from "react";

const Dashboard = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap text-lg gap-20 font-bold mb-20">
        <DashLinks link="/dashboard">
          <p>Open Tickets</p>
          <p>0</p>
        </DashLinks>
        <DashLinks link="/dashboard">
          <p>Closed Tickets</p>
          <p>0</p>
        </DashLinks>
        <DashLinks link="/dashboard">
          <p>Pending Tickets</p>
          <p>0</p>
        </DashLinks>
        <DashLinks link="/dashboard">
          <p>Rejected Tickets</p>
          <p>0</p>
        </DashLinks>
      </div>
      <div className="flex">
        <CustomButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`hover:underline w-max bg-[#1FAD32] gap-4 flex items-center hover:bg-[#7ee1b0]`}
        >
          <p>Generate Report</p>
          <div
            className={`${
              hover ? "translate-x-4" : "translate-x-0"
            } transition`}
          >
            <ArrowRightIcon />
          </div>
        </CustomButton>
      </div>
    </>
  );
};

export default Dashboard;
