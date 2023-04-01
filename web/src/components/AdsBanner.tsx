import { TextADS } from "./Ads/text";
import { Dot, GameController } from "@phosphor-icons/react";

interface AdsBannerProps {
  name: string;
  Days: string;
  useVoice: string;
  Years: number;
  hourStart: String;
  hourEnd: String;
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
}

export function AdsBanner(props: AdsBannerProps) {
  return (
    <li className="bg-zinc-900 w-60 flex flex-col rounded-lg overflow-hidden p-4 gap-1">
      <TextADS span="Nome" strong={props.name} />
      <TextADS
        span="Tempo de jogo"
        strong={props.Years}
        children={<strong> anos</strong>}
      />
      <TextADS
        span="Disponibilidade"
        children={
          <strong className="flex items-center">
            {props.Days}
            <Dot size={28} color="#636363" weight="bold" />
            {props.hourStart}-{props.hourEnd}
          </strong>
        }
      />
      <TextADS span="Chamada de áudio?" strong={props.useVoice} />
      <button
        className="bg-violet-500 sm:px-3 lg:px-5 h-9 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 sm:text-sm text-white justify-center"
        type="button"
        onClick={props.onClickButton}
      >
        <GameController size={24} />
        Conectar
      </button>
    </li>
  );
}
