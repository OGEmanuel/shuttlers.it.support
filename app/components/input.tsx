"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type inputLabelPropsType = {
  label: string;
  className: string;
  type: string;
  onSetInputValue?: (value: string) => void;
  inputValue?: string;
};

export function InputWithLabel(props: inputLabelPropsType) {
  const { label, className, type, onSetInputValue, inputValue } = props;
  return (
    <div className="grid w-[10rem] max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input
        type={type}
        id={label}
        onChange={(e) => onSetInputValue?.(e.target.value)}
        value={inputValue}
        placeholder={label}
        className={className}
      />
    </div>
  );
}
