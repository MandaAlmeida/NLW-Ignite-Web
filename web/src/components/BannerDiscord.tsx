import { CheckCircle, X } from "@phosphor-icons/react";

interface BannerDiscordProps {
  text: string;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function BannerDiscord(props: BannerDiscordProps) {
  return (
    <>
      <div
        className={
          props.active
            ? "absolute top-0 bg-black opacity-75 w-full h-full"
            : "hidden"
        }
      ></div>
      <div
        className={
          props.active
            ? "fixed flex flex-col bg-[#2A2634] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg lg:w-3/4 sm:w-full max-w-2xl p-8"
            : "hidden"
        }
      >
        <button
          aria-label="botão de fechar aba"
          type="button"
          onClick={props.onClick}
          className="bg-transparent flex justify-end"
        >
          <X size={28} color="#71717A" weight="bold" />
        </button>

        <div className="flex flex-col items-center  gap-6">
          <CheckCircle color="#34D399" weight="bold" size={100} />
          <section className="text-center">
            <h4 className="text-white sm:text-2xl lg:text-4xl font-black">
              Let's play!
            </h4>
            <p className="text-zinc-400 sm:text-xl lg:text-2xl text-2xl ">
              Agora é só começar a jogar!
            </p>
          </section>
          <section className="text-center flex flex-col gap-2">
            <p className="text-white sm:text-xl lg:text-2xl font-semibold">
              Adicione no Discord
            </p>
            <span className="text-zinc-400 sm:text-xl lg:text-2xl bg-zinc-900 py-3 px-4 rounded">
              {props.text}
            </span>
          </section>
        </div>
      </div>
    </>
  );
}
