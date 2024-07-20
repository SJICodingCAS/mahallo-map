import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  let performances = {
    foyer: [
      {
        name: "Disband",
        time: "10:00 - 10:30",
        image: "DisBand.jpeg",
        setlist: `
          Treasure - Bruno Mars
          What makes you beautiful - 1D
          Are you bored yet? - The Wallows
          Somebody to you - The Vamps
          Come inside of my heart - IV of Spades
          `      
      },
      {
        name: "Fooligans",
        time: "10:30 - 11:00",
        image: "fooligans.png",
        setlist: `
          Every Summertime - Nikki
          Classic - MKTO
          Sucker - Jonas Brothers
          This Love - Maroon 5
          `      
      },
      {
        name: "The Annexed",
        time: "11:30 - 12:00",
        image: "The Annexed.JPG",
        setlist: `
          Get Lucky - Daft Punk
          Sweather Weather - The Neighbourhood
          Still Into You - Paramore
          Mr Brightside - The Killers
          Don't Look Back In Anger - Oasis
          `      
      },
      {
        name: "C.M.I",
        time: "12:00 - 12:30",
        image: "cmi.png",
        setlist: `
          Everybody Talks - Neon Trees
          She Looks so Perfect - 5SOS
          From the Start - Laufey
          Steal my girl - 1D
        `
      },
      {
        name: "Whiteout",
        time: "13:00 - 13:40",
        image: "Whiteout.jpeg",
        setlist: `
          Sweet Child o Mine - Guns n Roses
          Song 2 - blur
          All the Small Things - blink 182
          Layla - Derek and the Dominos
          Welcome to the Jungle - Guns n Roses
          Learn to fly - Foo Fighters
          Starman - David Bowie
        `
      },
      {
        name: "The Blueforms",
        time: "13:40 - 14:20",
        image: "The Blueforms.jpeg",
        setlist: `
          Paradise - Coldplay
          Line without a hook - Ricky Montgomery
          Runaway Baby - Bruno Mars
          Good Luck Babe - Chappel roan
          In My Mind - Lyn Lapid
          Party in the USA - Miley Cyrus
          24K Magic - Bruno Mars
          shut up and dance - Walk The Moon
        `
      },
      {
        name: "Sir AHMADIAH's Quartet",
        time: "14:50 - 15:30",
        image: "sir_ahmadiah_quartet_.png",
        setlist: `
          Like a stone - Audioslave
          Jeremy - Pearl Jam
          Santeria - Sublime
          Soul to squeeze - RHCP
          Interstate love song - stone temple pilots
          Everlong - Foo fighters
        `
      },
      {
        name: "The Stiffs",
        time: "15:30 - 16:00",
        image: "The Stiffs.jpeg",
        setlist: `
          Locked out of heaven
          Billie Jean - MJ
          Its my Life
          Adventure of a lifetime
          Cake by the ocean
        `
      },
    ],
    hall: [
      {
        name: "Vocal Ensemble",
        time: "11:00 - 11:30",
        image: "Vocal_ensemble.jpg",
        setlist: `
          Come Alive - Greatest Showman
          Viva La Vida - Coldplay
          Atlantis - Seafret
          From Now On - Greatest Showman
          Pompeii - Bastille
        `
      },
      {
        name: "Dance",
        time: "12:00 - 12:30",
        image: "dance.jpg",
        setlist: `
          Sheesh - Babymonster
          Not My Fault - Renee Rap, Sexy (Dance Break) -  Avantika (Mean Girls Musical), Icon (Twice) Remix
          Wannabe - Itzy, Loco - Itzy Remix
          Nobody Knows - Kiss of Life
          Treasure - Bruno Mars
        `
      },
      {
        name: "The Songbirds",
        time: "14:20 - 14:50",
        image: "songbirds.jpg",
        setlist: `
          When you Believe (合唱)
          Never enough (合唱)
          Vaga luna (沐雨-意大利)
          For good (合唱-英文)
          郑老师自己的中文歌
        `
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen w-screen py-2">
      <div className="flex flex-row justify-between">
        <Link href="/map">
          <IoIosArrowBack size={32} />
        </Link>
        <h1 className="font-medium text-2xl">Performances</h1>
        <div></div>
      </div>
      
      <h1 className="font-bold text-2xl ml-2">Foyer</h1>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        {performances.foyer.map((performance, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 ml-2">
              <img className="rounded-lg" src={`/performers/${performance.image}`} alt={performance.name} style={{ height: '200px', width: "auto", minWidth: "200px", maxWidth: "unset" }} />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">{performance.name}</h1>
                <p>{performance.time}</p>
                <p className="text-xs whitespace-pre-line">{performance.setlist}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="font-bold text-2xl ml-2">Founder&apos;s Hall</h1>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        {performances.hall.map((performance, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 ml-2">
              <img className="rounded-lg" src={`/performers/${performance.image}`} alt={performance.name} style={{ height: '200px', width: "auto", minWidth: "200px", maxWidth: "unset" }} />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">{performance.name}</h1>
                <p>{performance.time}</p>
                <p className="text-xs whitespace-pre-line">{performance.setlist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}