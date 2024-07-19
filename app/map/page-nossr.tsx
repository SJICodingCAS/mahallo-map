"use client";

import { SubMap } from '@/app/lib/definitions';
import KonvaURLImage from '@/app/lib/konva-image';
import { submaps } from '@/app/lib/submaps';
import SubMapView from '@/app/map/submap-view';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';

export default function Home() {
  let [currentSubmap, setCurrentSubmap] = useState<SubMap | null>(null);

  function handleSubmapClick(submap: SubMap) {
    console.log(submap);
    setCurrentSubmap(submap);
  }

  // Submap view
  if (currentSubmap) {
    return (
      <SubMapView submap={currentSubmap} />
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
            {/* example image */}
            <KonvaURLImage src="/labelled_map.png" />
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
                  width={100}
                  height={100}
                  onClick={() => handleSubmapClick(submap)}
                  onTap={() => handleSubmapClick(submap)}
                />
                // <Circle
                //   key={index}
                //   x={submap.x}
                //   y={submap.y}
                //   radius={10}
                //   fill="red"
                //   onTouchStart={() => handleSubmapClick(submap)}
                //   onClick={() => handleSubmapClick(submap)}
                // />
              );
            })}
          </Layer>
        </Stage> 
      {/* <div className="flex flex-col gap-2 py-5">
        {submaps.map((pin, index) => {
          return (
            <div key={index} className="flex flex-row gap-2">
              <Image src="/labelled_map.png" alt='' width={50} height={50} />
              <div className="flex flex-col">
                <h1 className='text-lg font-bold'>{pin.details.name}</h1>
                <p>{pin.}</p>
                <hr />
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}