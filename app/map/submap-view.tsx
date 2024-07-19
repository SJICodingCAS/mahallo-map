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
        return "/pins/toilet_pin.svg";
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

  return (
    <div className="h-screen w-screen">
      <Stage width={window.innerWidth} height={window.innerHeight /2 } draggable={true}>
        <Layer>
          {/* example image */}
          <KonvaURLImage src={submap.image} />
        </Layer>
        <Layer>
          {/* Add tappable pins */}
          {submap.pins.map((pin, index) => {
            return (
              // <Circle
              //   key={index}
              //   x={submap.x}
              //   y={submap.y}
              //   radius={10}
              //   fill="red"
              //   onTouchStart={() => handlePinClick(pin)}
              //   onClick={() => handlePinClick(pin)}
              // />
              <KonvaURLImage 
                key={index} 
                src={getPinImage(pin.type)}
                x={pin.x}
                y={pin.y}
                width={50}
                height={50}
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
            return (
              <div key={index} className="flex flex-row gap-2">
                <Image src={getPinThumbnail(pin.type)} alt='' width={50} height={50} />
                <div className="flex flex-col w-full">
                  <h1 className='text-lg font-bold'>{pin.name}</h1>
                  <p>{pin.description}</p>
                  { selectedPin == pin && <p>Selected</p> }
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