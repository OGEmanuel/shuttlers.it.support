import CustomButton from "@/app/components/button";
import { Dropdown } from "@/app/components/dropdown";
import { InputWithLabel } from "@/app/components/input";

const pages = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "40",
    label: "40",
  },
  {
    value: "50",
    label: "50",
  },
];

const sla = [
  { value: "repair", label: "Repair" },
  { value: "request", label: "Request" },
];

const Tickets = () => {
  return (
    <div className="shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)] rounded-2xl px-10 py-10">
      <div className="flex gap-5 border-b border-[#EBEBEB] pb-5 mb-5 flex-wrap">
        <InputWithLabel type="text" className="rounded-2xl" label="Number" />
        <InputWithLabel type="text" className="rounded-2xl" label="Name" />
        <InputWithLabel type="text" className="rounded-2xl" label="Priority" />
        <InputWithLabel type="text" className="rounded-2xl" label="Title" />
        <InputWithLabel type="text" className="rounded-2xl" label="Date" />
        <InputWithLabel type="text" className="rounded-2xl" label="Agent" />
        <InputWithLabel type="text" className="rounded-2xl" label="Staff" />
        <InputWithLabel type="text" className="rounded-2xl" label="Type" />
        <div className="flex justify-self-end self-end">
          <Dropdown tag="SLA" data={sla} />
        </div>
      </div>
      <div className="flex justify-between">
        <Dropdown tag="Show" data={pages} />
        <div className="gap-5 flex">
          <CustomButton>Previous</CustomButton>
          <CustomButton>Next</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
