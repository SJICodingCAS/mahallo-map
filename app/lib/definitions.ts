export interface SubMap {
  name: string,
  // x and y of the submap pin on the map view
  x: number,
  y: number,
  // URL to the map image (to layer pins onto)
  image: string,
  pins: Pin[]
}

export interface Pin {
  x: number,
  y: number,
  name: string,
  description: string,
  type: PinType
}

export interface SubMap {
  name: string,
  pins: Pin[]
}

export enum PinType {
  GAME=1,
  FOOD=2,
  OTHER=3,
  TOILET=4
}