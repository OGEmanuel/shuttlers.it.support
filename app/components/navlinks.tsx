import {
  FormInput,
  History,
  Home,
  LucidePackage,
  PersonStandingIcon,
  Scroll,
  Ticket,
  UserMinusIcon,
  UserPlusIcon,
  UserSquare2,
  Users,
} from "lucide-react";

export const MainNavLink = [
  { title: "Home", path: "/dashboard", icon: <Home /> },
  { title: "Tickets", path: "/dashboard/tickets", icon: <Ticket /> },
  { title: "History", path: "/dashboard/history", icon: <History /> },
  { title: "SLA", path: "/dashboard/sla", icon: <Scroll /> },
  {
    title: "Customer Satisfaction",
    path: "/dashboard/customersat",
    icon: <PersonStandingIcon />,
  },
  { title: "Assets", path: "/dashboard/org-assets", icon: <LucidePackage /> },
  {
    title: "Requester Portal",
    path: "/dashboard/requester",
    icon: <FormInput />,
  },
  {
    title: "Onboarding",
    path: "/dashboard/onboarding",
    icon: <UserPlusIcon />,
  },
  {
    title: "Offboarding",
    path: "/dashboard/offboarding",
    icon: <UserMinusIcon />,
  },
];

export const SubNavLink = [
  { title: "Users", path: "/dashboard/admin/users", icon: <Users /> },
  { title: "Staff", path: "/dashboard/admin/staff", icon: <UserSquare2 /> },
];

export const PoliciesNavlink = [
  {
    title: "Loss, Theft or Damage",
    path: "https://www.notion.so/shuttlershq/Policy-Regarding-the-Loss-Theft-or-Damage-of-Work-Tools-f6fb5877d4f24a40a1142ac2ade271ed",
    icon: <UserSquare2 />,
  },
  {
    title: "Onboarding procedure",
    path: "https://www.notion.so/shuttlershq/IT-Onboarding-Procedure-7dc472466c99472f97c4796a7b861ba4",
    icon: <UserSquare2 />,
  },
  {
    title: "Offboarding",
    path: "https://www.notion.so/shuttlershq/IT-off-boarding-procedure-05a20086656f4e9799b3323df4fe0204",
    icon: <UserSquare2 />,
  },
  {
    title: "Access Card Compliance",
    path: "https://www.notion.so/shuttlershq/Employee-Access-Card-Compliance-Check-Procedure-f496fe5f5ba846b18b405140a05f8bb8",
    icon: <UserSquare2 />,
  },
  {
    title: "Attendance and Building Access Compliance",
    path: "https://www.notion.so/shuttlershq/Employee-Attendance-and-Building-Access-Compliance-4d007885ae034cba95f2ea1d84d72b5d",
    icon: <UserSquare2 />,
  },
  {
    title: "CCTV Review Process",
    path: "https://www.notion.so/shuttlershq/Weekly-CCTV-Review-Process-Report-c68bb08ba41442ccb29a3a0e3efa3862",
    icon: <UserSquare2 />,
  },
  {
    title: "Attendance and ID Card Compliance",
    path: "https://www.notion.so/shuttlershq/Weekly-Attendance-and-ID-Card-Compliance-Review-Process-Report-67c34a6196ea46ac8a60940049b90bfe",
    icon: <UserSquare2 />,
  },
  {
    title: "Code of Conduct",
    path: "https://www.notion.so/shuttlershq/Information-Technology-Code-of-Conduct-e4851c3a819a49bfa0e9ebb418a72345",
    icon: <UserSquare2 />,
  },
  {
    title: "Acceptable Use of Data and Resources",
    path: "https://www.notion.so/shuttlershq/Acceptable-Use-of-Data-and-Resources-9d3e8e5e23264fc2b54822e07cd3acf0",
    icon: <UserSquare2 />,
  },
  {
    title: "Password Policy",
    path: "https://www.notion.so/shuttlershq/Password-Policy-9b631ed09d9f4a7ca6848fa4c6ca97ca",
    icon: <UserSquare2 />,
  },
  {
    title: "User Account – Access Validation Policy",
    path: "https://www.notion.so/shuttlershq/User-Account-Access-Validation-Policy-e5b06302147c4ba589be554edef9afb8",
    icon: <UserSquare2 />,
  },
  {
    title: "Secure File Sharing and Transfer Policy",
    path: "https://www.notion.so/shuttlershq/Secure-File-Sharing-and-Transfer-Policy-5851079c875c4d138cd2d65785266ace",
    icon: <UserSquare2 />,
  },
  {
    title: "Information Classification and Handling Policy",
    path: "https://www.notion.so/shuttlershq/Information-Classification-and-Handling-Policy-b042ffe440f541919fed2d981db6d9fd",
    icon: <UserSquare2 />,
  },
  {
    title: "GDPR compliance statement",
    path: "https://www.notion.so/shuttlershq/GDPR-compliance-statement-d0d602943a224e3d96e2f0f96d3b8fb7",
    icon: <UserSquare2 />,
  },
  {
    title: "Docs",
    path: "https://www.notion.so/shuttlershq/98e7f953f57942c6841e5a6b1e4ca86c?v=51fd765fd9a1498095f9e0337f7f2445",
    icon: <UserSquare2 />,
  },
  {
    title: "Tutorials",
    path: "https://www.notion.so/shuttlershq/Tutorials-268ba648ba994b0690b67f2d01118e88",
    icon: <UserSquare2 />,
  },
];
