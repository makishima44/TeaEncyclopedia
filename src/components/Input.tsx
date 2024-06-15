import { ChangeEvent } from "react";

type InputPropsType = {
  title: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ title, value, onChange }: InputPropsType) => {
  return (
    <div>
      <span>{title}</span>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
