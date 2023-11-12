import SideBar from "@/components/SideBar/SideBar";
import "../../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="container lg:px-10 2xl:px-0 mx-auto">
        <div className="grid grid-cols-7 gap-5 py-20">
          <SideBar />
          <div className="col-span-5 p-10 rounded-2xl bg-white shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
