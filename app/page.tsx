import MembersChart from "@/components/StatsComponents/MembersChart";
import AgesChart from "@/components/StatsComponents/PieChart";
import ServicesChart from "@/components/StatsComponents/ServicesChart";
import Stats from "@/components/StatsComponents/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="flex justify-start m-6 font-bold text-2xl">Dashboard</h1>
      <Stats />
      <div className="grid grid-cols-12 gap-4 my-6">
        <div className="col-span-8">
          <MembersChart />
        </div>
        <div className="col-span-4">
          <AgesChart />
        </div>
        <div className="col-span-4">
          <AgesChart />
        </div>
        <div className="col-span-8">
          <ServicesChart />
        </div>
      </div>
    </div>
  );
}
