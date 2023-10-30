import CustomButton from "../components/button";
import DashLinks from "../components/dashboard-links";

const Dashboard = () => {
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
      <div className="flex justify-end">
        <CustomButton className="bg-[#0AAE5B] hover:bg-[#7ee1b0]">
          Generate Report
        </CustomButton>
      </div>
    </>
  );
};

export default Dashboard;
