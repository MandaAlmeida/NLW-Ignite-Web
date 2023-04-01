import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { Check, GameController } from "@phosphor-icons/react";
import { Input } from "./Form/input";
import { useEffect, useState, FormEvent } from "react";
import axios from "axios";

interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios("https://nlw-ignite-server.vercel.app/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(
        `https://nlw-ignite-server.vercel.app/games/${data.game}/ads`,
        {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weekDays: weekDays.map(Number),
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
          useVoiceChannel: useVoiceChannel,
        }
      );
      console.log(data.hourStart);
      alert("Anúncio criado com sucesso!");
    } catch (err) {
      console.log(err);
      alert("Erro ao criar o anúncio");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="fixed bg-[#2A2634] lg:py-8 lg:px-10 sm:p-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg lg:w-[480px] sm:w-[90%] sm:max-w-md shadow-lg shadow-black/25 overflow-auto">
          <Dialog.Title className="lg:text-3xl sm:text-lg font-black ">
            Publique um anúncio
          </Dialog.Title>
          <form
            onSubmit={handleCreateAd}
            className="mt-8 flex flex-col lg:gap-4 sm:gap-2"
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold sm:text-sm" htmlFor="game">
                Qual o game?
              </label>
              <select
                id="game"
                name="game"
                className="bg-zinc-900 lg:py-3 lg:px-4 sm:p-2 rounded text-sm placeholder:text-zinc-500 sm:w-full"
                defaultValue=""
              >
                <option disabled value="">
                  Selecione o game que deseje jogar
                </option>
                {games.map((game) => {
                  return (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold sm:text-sm" htmlFor="name">
                Seu nome (ou nickname)
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Como te chamam dentro do game?"
              />
            </div>
            <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col lg:gap-6 sm:gap-3">
              <div className="flex flex-col gap-2">
                <label
                  className="font-semibold sm:text-sm"
                  htmlFor="yearsPlaying"
                >
                  Joga há quantos anos?
                </label>
                <Input
                  id="yearsPlaying"
                  name="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold sm:text-sm" htmlFor="discord">
                  Qual seu Discord?
                </label>
                <Input id="discord" name="discord" placeholder="Usuário#0000" />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col lg:gap-6 sm:gap-3">
              <div className="flex flex-col gap-2">
                <label className="font-semibold sm:text-sm" htmlFor="weekDays">
                  Quando costuma jogar?
                </label>
                <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value="0"
                    title="Domingo"
                    className={`lg:w-8 lg:h-8 rounded  ${
                      weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="1"
                    title="Segunda"
                    className={`lg:w-8 lg:h-8 rounded  ${
                      weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="2"
                    title="Terça"
                    className={`lg:w-8 lg:h-8 rounded  ${
                      weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="3"
                    title="Quarta"
                    className={`lg:w-8 lg:h-8 rounded  ${
                      weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="4"
                    title="Quinte"
                    className={`lg:w-8 lg:h-8 rounded ${
                      weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="5"
                    title="Sexta"
                    className={`lg:w-8 lg:h-8 rounded ${
                      weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="6"
                    title="Sábado"
                    className={`lg:w-8 lg:h-8 rounded  ${
                      weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold sm:text-sm" htmlFor="hourStart">
                  Qual horário do dia?
                </label>
                <div className="grid grid-cols-2 gap-2 ">
                  <Input
                    name="hourStart"
                    id="hourStart"
                    type="time"
                    placeholder="De"
                  />
                  <Input
                    name="hourEnd"
                    id="hourEnd"
                    type="time"
                    placeholder="Até"
                  />
                </div>
              </div>
            </div>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root
                checked={useVoiceChannel}
                onCheckedChange={(checked) => {
                  if (checked == true) {
                    setUseVoiceChannel(true);
                  } else {
                    setUseVoiceChannel(false);
                  }
                }}
                className="w-6 h-6 p-1 rounded bg-zinc-900"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400 " />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar no chat de voz
            </label>
            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-500 sm:px-3 sm:h-9 lg:px-5 lg:h-12 sm:text-sm rounded-md font-semibold hover:bg-zinc-600">
                Cancelar
              </Dialog.Close>
              <button
                className="bg-violet-500 sm:px-3 sm:h-9 lg:px-5 lg:h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 sm:text-sm text-white justify-center"
                type="submit"
              >
                <GameController size={24} />
                Encontre seu Duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
