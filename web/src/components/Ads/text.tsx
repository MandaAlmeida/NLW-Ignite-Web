interface TextProps {
  span: string;
  strong?: string | number;
  children?: React.ReactNode;
}

export function TextADS(props: TextProps) {
  return (
    <span className="text-zinc-300 text-xs flex flex-col gap-1">
      {props.span}
      <strong className="flex gap-1">
        {props.strong} {props.children}
      </strong>
    </span>
  );
}
