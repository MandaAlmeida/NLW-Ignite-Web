import { CreateAdBanner } from "../../components/CreateAdBanner";
import * as Dialog from "@radix-ui/react-dialog";

import "../../styles/main.css";

import logoImg from "../../assets/logo-nlw-esports.svg";

import { CreateAdModal } from "../../components/CreateAdModal";
import { GamerBannerMap } from "../../components/GameBannerMap";
import { CreateAdGame } from "../../components/CreateAdGame";
import { useState } from "react";

export function Home() {
  return (
    <div className=" w-full mx-auto flex flex-col items-center my-20 flex-nowrap">
      <img src={logoImg} alt="" />

      <h1 className=" text-3xl md:text-6xl text-white font-black my-16">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <GamerBannerMap />
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
