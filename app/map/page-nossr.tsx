"use client";

import { SubMap } from '@/app/lib/definitions';
import KonvaURLImage from '@/app/lib/konva-image';
import { submaps } from '@/app/lib/submaps';
import SubMapView from '@/app/map/submap-view';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Text, Group } from 'react-konva';
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  let [currentSubmap, setCurrentSubmap] = useState<SubMap | null>(null);

  function handleSubmapClick(submap: SubMap) {
    console.log(submap);
    setCurrentSubmap(submap);
  }

  // Submap view
  if (currentSubmap) {
    return (
      <div>
        <header className="bg-gray-200 text-black w-screen fixed z-10 p-2 flex flex-row content-center justify-center">
          {/* <span className="text-2xl font-bold"> &lt;  </span> */}
          <IoIosArrowBack size={32}
            onClick={() => setCurrentSubmap(null)}
          />
          <h1 className="text-2xl font-bold mx-auto">{currentSubmap.name}</h1>
        </header>
        <SubMapView submap={currentSubmap} />
      </div>
    )
  }

  // Overall map view
  return (
    <div className="h-screen">
        <Stage width={window.innerWidth} height={window.innerHeight} draggable={true} dragBoundFunc={
          (pos) => {
            console.log(pos);
            // clamp a 1000x1000 window
            return {
              x: Math.min(0, Math.max(pos.x, -1000 + window.innerWidth)),
              y: Math.min(0, Math.max(pos.y, -900 + window.innerHeight))
            };
          }
        }>
          <Layer>
            <KonvaURLImage src="/original_map.png" />
          </Layer>
          <Layer>
            {/* Add tappable pins */}
            {submaps.map((submap, index) => {
              return (
                <KonvaURLImage
                  key={index}
                  src="/pins/other_pin.svg"
                  x={submap.x}
                  y={submap.y}
                  width={75}
                  height={75}
                  onClick={() => handleSubmapClick(submap)}
                  onTap={() => handleSubmapClick(submap)}
                />
              );
            })}

            {/* Add text */}

            {submaps.map((submap, index) => {
              return (
                <Text
                  key={index}
                  x={submap.x}
                  y={submap.y + 75}
                  text={submap.name}
                  fontSize={24}
                  fill="black"
                  fontStyle='bold'
                />
              );
            })}

          </Layer>
        </Stage> 
    </div>
  );
}