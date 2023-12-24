import SideBar from "@/components/SideBar/SideBar";
import "../../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="container lg:px-10 2xl:px-0 mx-auto">
        <div className="grid md:grid-cols-7 gap-5 py-20">
          <div className="hidden md:block md:col-span-2">
            <SideBar />
          </div>
          <div className="md:col-span-5 p-10 rounded-2xl bg-white shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
