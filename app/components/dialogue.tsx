import Link from "next/link";

const Dialogue = ({
  open,
  data,
  pathname,
  className,
  ulClassName,
  pClassName,
}: {
  open: boolean;
  data: { title: string; path: string }[];
  pathname?: string;
  className?: string;
  ulClassName?: string;
  pClassName?: string;
}) => {
  return (
    <div
      className={`overflow-auto scroll transition-all ${
        open
          ? "translate-y-0 max-h-40 border-[#EBEBEB] bg-[#f7f7f7]"
          : "-translate-y-10 h-0 border-transparent"
      } border shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)] rounded-2xl ${className}`}
    >
      <ul className={ulClassName}>
        {data.map((link) => (
          <li key={link.title}>
            <Link
              href={link.path}
              //   target="_blank"
              className={`flex items-center gap-4 mb-2 hover:bg-[#F7F7F7] rounded-xl cursor-pointer ${
                pathname === link.path ? "bg-[#F7F7F7]" : "bg-transparent"
              }`}
            >
              <p className={`${pClassName} text-[#060606] hover:font-bold`}>
                {link.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dialogue;
