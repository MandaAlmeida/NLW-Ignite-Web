import { useEffect, useState } from "react";
import axios from "axios";
import { GameBanner } from "./GameBanner";
import Slider from "react-slick";
import "../styles/slider.css";
import { AdsBanner } from "./AdsBanner";
import { BannerDiscord } from "./BannerDiscord";
import { CreateAdGame } from "./CreateAdGame";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface AdProps {
  id: string;
  name: string;
  weekDays: number;
  useVoiceChannel: string | boolean;
  yearsPlaying: number;
  hourStart: String;
  hourEnd: String;
}

export function GamerBannerMap() {
  const [games, setGames] = useState<Game[]>([]);
  const [duos, setDuos] = useState<AdProps[]>([]);
  const [discordDuoSelect, setDiscordDuoSelect] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [active, setActive] = useState(false);
  const [activeAds, setActiveAds] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function getDayOfWeek(dayNumber: number) {
    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    return daysOfWeek[dayNumber];
  }

  async function getDiscordUser(id: string) {
    fetch(`https://nlw-ignite-server.vercel.app/ads/${id}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelect(data.discord));
  }

  function handleSelectDuo(id: string) {
    getDiscordUser(id);
    setActive(!active);
  }

  useEffect(() => {
    axios("https://nlw-ignite-server.vercel.app/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  async function getAds(id: string) {
    fetch(`https://nlw-ignite-server.vercel.app/games/${id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }

  function handleAds(id: string, title: string, img: string) {
    getAds(id);
    setTitle(title);
    setImg(img);
    setActiveAds(!activeAds);
    console.log(id);
  }

  const Games = games.map((game) => (
    <GameBanner
      key={game.id}
      bannerUrl={game.bannerUrl}
      title={game.title}
      adsCount={game._count.ads}
      onClick={() => handleAds(game.id, game.title, game.bannerUrl)}
    />
  ));

  const Ads = duos.map((duo) => (
    <AdsBanner
      key={duo.id}
      name={duo.name}
      Days={getDayOfWeek(duo.weekDays)}
      useVoice={duo.useVoiceChannel ? "sim" : "não"}
      Years={duo.yearsPlaying}
      hourStart={duo.hourStart}
      hourEnd={duo.hourEnd}
      onClickButton={() => handleSelectDuo(duo.id)}
    />
  ));

  return (
    <>
      <Slider {...settings}>{Games}</Slider>

      <CreateAdGame
        img={img}
        text={title}
        activeAds={activeAds}
        onClick={() => {
          setActiveAds(!activeAds);
        }}
        children={
          <>
            <div className="flex gap-2 overflow-x-auto ">{Ads}</div>
            <BannerDiscord
              text={discordDuoSelect}
              active={active}
              onClick={() => {
                setActive(!active);
              }}
            />
          </>
        }
      />
    </>
  );
}
