import NotificationBell from "@/components/notificationBell";
import SettingsPage from "@/components/settingComponents";
import Sidebar from "@/layout/dashboardLayout";
import TopBar from "@/layout/navbar";
const Settings = () => {
  return (
    <div className="relative bg-[#F0F1F3]  pt-28  pb-14">
      {" "}
      <div className="pl-49.5">
        <Sidebar />
        <TopBar
          rightSide={
            <>
              <NotificationBell />
            </>
          }
        />
      </div>
      <div className=" lg:flex gap-14 pl w-full pl-[232px]">
        <div className="px-4 pt-5 pb-6.5 w-full max-w-[1126px] bg-white rounded-md">
          {/* <div className="bg-white rounded-md w-full max-w-[900px] p-6 mx-auto mt-8"> */}
          {/* Page Header */}

          <SettingsPage />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
