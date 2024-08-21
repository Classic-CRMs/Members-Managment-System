import React from "react";

type ProfileCardProps = {
  name: string;
  emoji: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, emoji }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mx-auto">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 rounded-3xl bg-yellow-100 flex items-center justify-center text-8xl mb-6">
          {emoji}
        </div>
        <h2 className="text-2xl font-bold text-center">{name}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;
