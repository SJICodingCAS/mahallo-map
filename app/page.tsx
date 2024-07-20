import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center align-middle text-center py-2 gap-2">
      <Image className="ml-auto mr-auto" src="/mahalo_hand.png" alt="Mahalo hand" width={512} height={512} />
      <h1 className="font-bold text-4xl">Welcome to SJI!</h1>
      <h2 className="font-medium text-xl">Look forward to events such as live performances from our students, delicious food stalls and exhilarating games!</h2>
      <Link href="/map" className="rounded-lg w-fit p-2 ml-auto mr-auto bg-green-800 font-bold text-white text-2xl px-8 my-4">Get Started</Link>
    </div>
  );
}
