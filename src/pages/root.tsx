import { Outlet, useLocation } from "react-router-dom";
import { SiteHeader } from "../components/site-header";
import { cn } from "@/lib/utils";

const pageBackground: Record<string, string> = {
  "": "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop",
  rockets: "bg-rockets-mobile md:bg-rockets-tablet lg:bg-rockets-desktop",
  missions: "bg-missions-mobile md:bg-missions-tablet lg:bg-missions-desktop",
  profile: "bg-profile-mobile md:bg-profile-tablet lg:bg-profile-desktop",
};

export default function Root() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const bgStyles = pageBackground[location];

  return (
    <div className={cn("flex flex-1 flex-col bg-cover", bgStyles)}>
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
