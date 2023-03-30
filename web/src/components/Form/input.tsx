import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 lg:py-3 lg:px-4 sm:p-2 rounded text-sm placeholder:text-zinc-500"
    />
  );
}
