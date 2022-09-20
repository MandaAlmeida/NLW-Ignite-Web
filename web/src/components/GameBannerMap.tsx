import React,{ useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import { GameBanner } from './GameBanner';


interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}



const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 400, itemsToShow: 2, itemsToScroll: 2},
    {width: 550, itemsToShow: 3, itemsToScroll: 3},
    {width: 768, itemsToShow: 4, itemsToScroll: 4},
    {width: 900, itemsToShow: 5, itemsToScroll: 5},
    {width: 1200, itemsToShow: 8, itemsToScroll: 8},
    
]



export function GamerBannerMap( ){
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios('http://localhost:3333/games').then(response => {
            setGames(response.data)
        })
        }, []) 
    return (
    
        <Carousel isRTL={false}  breakPoints={breakPoints}  preventDefaultTouchmoveEvent={true}  className= "flex flex-col mt-10 p-2" > 
        {games.map(game => {
          return (
           <div className= "flex flex-col p-4 w-[100%]" key={game.id}>
               <GameBanner 
               key={game.id}
               bannerUrl={game.bannerUrl}
               title={game.title} 
               adsCount={game._count.ads} 
               />
               </div>
           )
       })}
   
   </Carousel>
 
    )
}