import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdsBanner } from "./AdsBanner";
import { BannerDiscord } from "./BannerDiscord";
import { X } from "@phosphor-icons/react";

interface AdsProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  activeAds: boolean;
  text: string;
  img: string;
}

export function CreateAdGame(props: AdsProps) {
  return (
    <>
      <div
        className={
          props.activeAds
            ? "fixed top-0 bg-black opacity-75 w-full h-full"
            : "hidden"
        }
      ></div>
      <div
        className={
          props.activeAds
            ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-3/4 h-[90%] bg-[#2A2634] flex flex-col items-center p-4 overflow-y-auto"
            : "hidden"
        }
      >
        <button
          aria-label="botão de fechar aba"
          type="button"
          onClick={props.onClick}
          className="font-bold text-white flex justify-end w-full"
        >
          <X size={28} color="#71717A" weight="bold" />
        </button>
        <div className="relative h-52 mb-4">
          <img
            className="mx-auto h-full object-cover rounded"
            src={props.img}
            alt="imagem do jogo"
          />
          <div className=" p-2 absolute bottom-0 left-0 right-0  bg-game-gradient rounded">
            <span className="lg:text-xl sm:text-lg font-black text-white">
              {props.text}
            </span>
          </div>
        </div>
        <p className="lg:text-1xl sm:text-lg text-zinc-400 mb-3">
          Conecte-se e comece a jogar!
        </p>
        {props.children}
      </div>
    </>
  );
}
