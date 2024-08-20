import BasicInformationForm from "@/components/addmember/BasicInfo";
import React from "react";

const addmember = () => {
  return (
    <div>
      <h1 className="flex justify-start m-6 p-9 font-bold text-2xl">Add New Member</h1>
      <BasicInformationForm />
    </div>
  );
};

export default addmember;
