import { useEffect, useState } from "react";

import axios from "axios";
import { GameBanner } from "./GameBanner";
import Slider from "./Slider";
import { ReactElasticCarouselProps } from "react-elastic-carousel";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function GamerBannerMap() {
  const [games, setGames] = useState<Game[]>([]);
  const settings: ReactElasticCarouselProps = {
    isRTL: false,
    itemPadding: [10, 8],
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 300, itemsToShow: 2, itemsToScroll: 2 },
      { width: 600, itemsToShow: 3, itemsToScroll: 3 },
      { width: 790, itemsToShow: 4, itemsToScroll: 4 },
      { width: 1000, itemsToShow: 5, itemsToScroll: 5 },
      { width: 1550, itemsToShow: 8, itemsToScroll: 8 },
    ],
  };

  useEffect(() => {
    axios("https://nlw-ignite-server.vercel.app/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <Slider settings={settings}>
      {games.map((game) => (
        <GameBanner
          key={game.id}
          bannerUrl={game.bannerUrl}
          title={game.title}
          adsCount={game._count.ads}
        />
      ))}
    </Slider>
  );
}
