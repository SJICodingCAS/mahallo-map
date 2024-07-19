"use client";
import { useState, useEffect } from "react";
import { Image as KonvaImage } from "react-konva";

export default function KonvaURLImage({ src, ...props }: { src: string } & any ) {
  const [imageObj, setImageObj] = useState(new window.Image());

  useEffect(() => {
    const image_obj = new window.Image();

    image_obj.src = src;

    image_obj.onload = () => {
      setImageObj(image_obj);
    };

    return () => {
      imageObj.src = "";
      setImageObj(new window.Image());
    };
  }, []);

  return (
    <KonvaImage
      image={imageObj}
      {...props}
    />
  );
}