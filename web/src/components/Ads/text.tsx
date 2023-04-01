interface TextProps {
  span: string;
  strong?: string | number;
  children?: React.ReactNode;
}

export function TextADS(props: TextProps) {
  return (
    <span className="text-zinc-300 text-sm flex flex-col gap-1">
      {props.span}
      <strong className="flex">
        {props.strong} {props.children}
      </strong>
    </span>
  );
}
