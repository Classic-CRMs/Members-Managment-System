import FamilyForm from "@/components/createfamily/FamilyForm";
import React from "react";

const CreateFamily = () => {
  return (
    <div>
      <h1 className="flex justify-start ml-28 my-14 font-bold text-2xl">
        Create Family
      </h1>
      <FamilyForm />
    </div>
  );
};

export default CreateFamily;
