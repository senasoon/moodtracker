export interface FormInputProps {
  id: string;
  type: string;
  labelText: string;
}

export default function FormInput({ id, type, labelText }: FormInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-bold">
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        className="px-2 mt-1 border border-lightGray w-80 h-11 focus:outline-black"
      />
    </div>
  );
}
