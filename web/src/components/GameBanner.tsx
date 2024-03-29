import { Link } from "react-router-dom";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <button
      className="relative rounded-lg overflow-hidden bg-center"
      onClick={props.onClick}
    >
      <img src={props.bannerUrl} alt="" className="w-[100%] " />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sn block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </button>
  );
}
