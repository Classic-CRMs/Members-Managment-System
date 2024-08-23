import MembersChart from "@/components/StatsComponents/MembersChart";
import PieChart from "@/components/StatsComponents/PieChart";
import ServicesChart from "@/components/StatsComponents/ServicesChart";
import Stats from "@/components/StatsComponents/Stats";
import Image from "next/image";

export default function Home() {
  return (
   <div className="max-w-4xl mx-auto">
    <h1 className="flex justify-start m-6 font-bold text-2xl">
        Dashboard
    </h1>
    <Stats/>
    <MembersChart/>
    <ServicesChart/>
    <PieChart/>
   </div>
  );
}
