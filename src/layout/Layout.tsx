import { Outlet } from "react-router";
import HeaderCommon from "./Header";

const LayoutDefault = () => {
 
  return (
      <div>
          <HeaderCommon />
          <div>
              <Outlet />
          </div>
      </div>

  );
};

export default LayoutDefault;