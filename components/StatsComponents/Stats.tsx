import type { NextPage } from "next";

type StatItemProps = {
  icon: string;
  label: string;
  value: string;
  change: string;
  changeDirection: 'up' | 'down';
};

const StatItem: React.FC<StatItemProps> = ({ icon, label, value, change, changeDirection }) => {
  return (
    <>
    <div className="flex justify-between space-x-4">
      <div className={`flex-shrink-0 w-12 h-12 rounded-full mr-4 flex items-center justify-center ${changeDirection === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
        <span>{icon}</span>
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className={`text-sm ${changeDirection === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {changeDirection === 'up' ? '↑' : '↓'} {change} this month
        </p>
        </div>
      </div>
    </>
  );
};

const Stats: NextPage = () => {
  return (
    <div className="flex items-center justify-around space-x-4 bg-white rounded-lg p-4 shadow-sm">

      <StatItem 
        icon="👥"
        label="Total Customers"
        value="5,423"
        change="16%"
        changeDirection="up"
        />
      <StatItem 
        icon="👤"
        label="Members"
        value="1,893"
        change="1%"
        changeDirection="down"
      />
      <StatItem 
        icon="💻"
        label="Active Now"
        value="189"
        change="4%"
        changeDirection="up"
      />
    </div>
  );
};

export default Stats;