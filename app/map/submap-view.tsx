'use client';
import { Pin, SubMap } from "@/app/lib/definitions";
import KonvaURLImage from "@/app/lib/konva-image";
import { Circle, Layer, Stage } from "react-konva";
import Image from "next/image";
import { useState } from "react";

export default function SubMapView({submap}: {submap: SubMap}) {
  let [selectedPin, setSelectedPin] = useState<Pin | null>(null);

  let handlePinClick = (pin: any) => {
    console.log(pin);
    setSelectedPin(pin);
  }

  let getPinImage = (type: number) => {
    switch (type) {
      case 1:
        return "/pins/game_pin.svg";
      case 2:
        return "/pins/food_pin.svg";
      case 3:
        return "/pins/other_pin.svg";
      case 4:
        return "/pins/toilet_male_pin.svg";
      default:
        return "/pins/other_pin.svg";
    }
  }

  let getPinThumbnail = (type: number) => {
    switch (type) {
      case 1:
        return "/pins/game_thumbnail.svg";
      case 2:
        return "/pins/food_thumbnail.svg";
      case 3:
        return "/pins/other_thumbnail.svg";
      case 4:
        return "/pins/toilet_thumbnail.svg";
      default:
        return "/pins/other_thumbnail.svg";
    }
  }

  let getPinText = (type: number) => {

  }

  return (
    <div className="w-screen min-h-screen">
      <Stage width={window.innerWidth} height={window.innerHeight /2 } draggable={true} scale={submap.scale ? {x: submap.scale, y: submap.scale} : {x: 1, y: 1}}>
        <Layer>
          {/* example image */}
          <KonvaURLImage src={submap.image} />
        </Layer>
        <Layer>
          {/* Add tappable pins */}
          {submap.pins.map((pin, index) => {
            return (
              <KonvaURLImage 
                key={index} 
                src={getPinImage(pin.type)}
                x={pin.x}
                y={pin.y}
                width={50}
                height={50}
                scale={
                  submap.pinScale ? {x: submap.pinScale, y: submap.pinScale} : {x: 1, y: 1}
                }
                onTouchStart={() => handlePinClick(pin)}
                onClick={() => handlePinClick(pin)}
              />
            );
          })}
        </Layer>
      </Stage> 
      <div className="h-full">
        <div className="flex flex-col gap-2 px-4 py-8">
          {submap.pins.map((pin, index) => {
            if(pin.type == 4) {
              return 
            }

            return (
              <div key={index} className="flex flex-row gap-2">
                <Image src={getPinThumbnail(pin.type)} alt='' width={50} height={50} />
                <div className="flex flex-col w-full">
                  <h1 className='text-lg font-bold'>{pin.name}</h1>
                  <p>{pin.description}</p>
                  {/* { selectedPin == pin && <p>Selected</p> } */}
                  <hr className="mt-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}