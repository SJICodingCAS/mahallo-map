import { SubMap } from "@/app/lib/definitions"


export const submaps: SubMap[] = [
  {
    x: 150,
    y: 150,
    name: "Canteen",
    image: "/submaps/canteen.png",
    pins: [
      {
        x: 100,
        y: 100,
        name: "Main 1",
        description: "Main 1 description",
        type: 1
      },
      {
        x: 150,
        y: 150,
        name: "Food 1",
        description: "Main 1 description",
        type: 2
      },
      {
        x: 200,
        y: 130,
        name: "Toilt 1",
        description: "Main 1 description",
        type: 3
      }
    ]
  }
]
