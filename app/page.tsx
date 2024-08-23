import Stats from "@/components/StatsComponents/Stats";
import Image from "next/image";

export default function Home() {
  return (
   <div className="max-w-4xl mx-auto">
    <h1 className="flex justify-start m-6 font-bold text-2xl">
        Dashboard
    </h1>
    <Stats/>
   </div>
  );
}
