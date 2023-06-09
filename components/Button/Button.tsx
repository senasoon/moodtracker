export interface ButtonProps {
  text: string;
  disabled?: boolean;
  classProp?: string;
}

export default function Button({
  text,
  disabled,
  classProp,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={`w-80 h-11 font-bold ${
        disabled ? 'bg-lightGray text-darkGray' : 'bg-black text-white'
      } ${classProp}`}
      {...restProps}
    >
      {text}
    </button>
  );
}
