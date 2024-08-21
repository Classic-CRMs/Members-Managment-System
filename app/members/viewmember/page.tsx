import EditMember from "@/components/editmember/EditMember";
import LinkedCard from "@/components/editmember/LinkCard";
import ProfileCard from "@/components/editmember/ProfileCard";
import React from "react";

const ViewMember = () => {
  return (
    <>
      <h1 className="flex justify-start m-6 p-9 font-bold text-2xl">Member Detail</h1>
    <div className="flex justify-center">
        <div className="w-[18rem] mr-8">
        <ProfileCard
      name="John Lincoln Doe"
      emoji="😃"
    />
      <LinkedCard/>
        </div>
      <EditMember />
    </div>
    </>
  );
};

export default ViewMember;
