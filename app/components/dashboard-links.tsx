import Link from "next/link";

const DashLinks = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="flex border border-[#EBEBEB] justify-between items-start w-[20rem] shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)] rounded-2xl px-10 py-10"
    >
      {children}
    </Link>
  );
};

export default DashLinks;
