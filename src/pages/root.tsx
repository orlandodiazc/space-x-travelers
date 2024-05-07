import { Outlet } from "react-router-dom";
import { SiteHeader } from "../components/site-header";

export default function Root() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
