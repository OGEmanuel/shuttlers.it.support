import AddIcon from "../icons/add-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import CustomButton from "./button";
import { useFormatDate } from "../util/useFormatDate";
import { useState } from "react";
import Dialogue from "./dialogue";

const date = new Date();
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

const createNew = [
  { title: "Create New Ticket", path: "/dashboard/requester" },
  { title: "Onboarding", path: "/dashboard/onboarding" },
  { title: "Offboarding", path: "/dashboard/offboarding" },
];

const profile = [
  { title: "Edit Profile", path: "/dashboard/admin/users" },
  { title: "Logout", path: "/" },
];

const MainNav = () => {
  const [openCreateDialogue, setOpenCreateDialogue] = useState<boolean>(false);
  const [openProfileDialogue, setOpenProfileDialogue] =
    useState<boolean>(false);
  const pathname = usePathname();
  const formattedDate = useFormatDate(date);

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

  const handleToggleCreate = () => {
    setOpenCreateDialogue(!openCreateDialogue);
    if (openProfileDialogue) {
      setOpenProfileDialogue(false);
    }
  };

  const handleToggleProfile = () => {
    setOpenProfileDialogue(!openProfileDialogue);
    if (openCreateDialogue) {
      setOpenCreateDialogue(false);
    }
  };

  return (
    <nav
      className={`flex items-center justify-between relative py-6 mb-7 border-b border-[#EBEBEB]`}
    >
      <div className="md:block xl:gap-0 gap-2.5 flex flex-col">
        {/* <MenuIcon className="md:hidden" onClick={handleClick} /> */}
        <p className="text-[#7B7B7B] text-xs">{formattedDate}</p>
        <h1 className="md:text-2xl text-lg text-[#0A0A0A]">{title}</h1>
      </div>
      <div className="flex gap-2 md:gap-7 relative">
        <CustomButton onClick={handleToggleCreate}>
          <AddIcon />
          <p className="hidden md:block">Create New</p>
        </CustomButton>
        <button className="absolute top-12 z-20" onClick={handleToggleCreate}>
          <Dialogue
            data={createNew}
            open={openCreateDialogue}
            ulClassName="py-3 pl-4 pr-8"
            pClassName="text-sm"
          />
        </button>
        <button onClick={handleToggleProfile}>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#F4F4F4] text-xs md:text-[0.95rem] text-[#101723]">
              IT
            </AvatarFallback>
          </Avatar>
        </button>
        <button
          className="absolute top-12 left-20 z-20"
          onClick={handleToggleProfile}
        >
          <Dialogue
            data={profile}
            open={openProfileDialogue}
            ulClassName="py-3 pl-4 pr-8"
            pClassName="text-sm"
          />
        </button>
      </div>
      <div className="absolute w-full h-[1px] bottom-0 left-0">
        <div className="bg-gradient-to-r from-white to-current via-current h-full w-1/2 left-0 absolute"></div>
        <div className="bg-gradient-to-r from-current to-white via-current h-full w-1/2 right-0 absolute"></div>
      </div>
    </nav>
  );
};

export default MainNav;
