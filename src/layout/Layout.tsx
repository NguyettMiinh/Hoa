import { Outlet } from "react-router";
import HeaderCommon from "./Header";

const LayoutDefault = () => {
 
  return (
      <div className="wrapper w-full flex flex-col items-center">
          <HeaderCommon />
          <div className="container w-[1400px] bg-slate-400 h-[500px]">
              <Outlet />
          </div>
      </div>

  );
};

export default LayoutDefault;