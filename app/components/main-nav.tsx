import AddIcon from "../icons/add-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import CustomButton from "./button";
import { useFormatDate } from "../util/useFormatDate";

const MainNav = () => {
  const pathname = usePathname();
  const date = new Date();
  const formattedDate = useFormatDate(date);
  const tickets = "/dashboard/tickets";
  const history = "/dashboard/history";
  const sla = "/dashboard/sla";
  const customersat = "/dashboard/customersat";
  const assets = "/dashboard/org-assets";
  const requester = "/dashboard/requester";
  const onboarding = "/dashboard/onboarding";
  const offboarding = "/dashboard/offboarding";
  const users = "/dashboard/admin/users";
  const staff = "/dashboard/admin/staff";
  let title = "Dashboard";

  if (pathname === tickets) {
    title = "Tickets";
  } else if (pathname === history) {
    title = "History";
  } else if (pathname === users) {
    title = "Team";
  } else if (pathname === staff) {
    title = "Staff";
  } else if (pathname === sla) {
    title = "SLA";
  } else if (pathname === customersat) {
    title = "Customer Satisfaction";
  } else if (pathname === assets) {
    title = "Assets";
  } else if (pathname === requester) {
    title = "Requester Portal";
  } else if (pathname === onboarding) {
    title = "Onboarding";
  } else if (pathname === offboarding) {
    title = "Offboarding";
  }

  return (
    <nav
      className={`flex items-center justify-between relative py-6 mb-7 border-b border-[#EBEBEB]`}
    >
      <div className="md:block xl:gap-0 gap-2.5 flex flex-col">
        {/* <MenuIcon className="md:hidden" onClick={handleClick} /> */}
        <p className="text-[#7B7B7B] text-xs">{formattedDate}</p>
        <h1 className="md:text-2xl text-lg text-[#0A0A0A]">{title}</h1>
      </div>
      <div className="flex gap-2 md:gap-7">
        <CustomButton>
          <AddIcon />
          <p className="hidden md:block">Create New</p>
        </CustomButton>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="bg-[#F4F4F4] text-xs md:text-[0.95rem] text-[#101723]">
            IT
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute w-full h-[1px] bottom-0 left-0">
        <div className="bg-gradient-to-r from-white to-current via-current h-full w-1/2 left-0 absolute"></div>
        <div className="bg-gradient-to-r from-current to-white via-current h-full w-1/2 right-0 absolute"></div>
      </div>
    </nav>
  );
};

export default MainNav;
