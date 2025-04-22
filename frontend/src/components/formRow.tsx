import React from "react";
interface propsInterface {
  name: string;
  type: string;
  placeHolder: string;
  defaultValue: string;
  className: string;
  required: boolean;
//   value: string;
}
const FormRow: React.FC<propsInterface> = ({
  name,
  type,
  placeHolder,
  defaultValue,
  className,
  required,
//   value,
}) => {
  return (
    <p className="">
      <label htmlFor={name} className="block capitalize leading-normal mb-3 mt-4 font-bold">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeHolder || ""}
        name={name}
        id={name}
        className={className}
        required={required}
        defaultValue={defaultValue}
        // value={value}
      />
    </p>
  );
};

export default FormRow;
