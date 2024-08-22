import FamilyForm from "@/components/createfamily/FamilyForm";
import React from "react";

const CreateFamily = () => {
  return (
    <div>
      <h1 className="flex justify-start m-6 p-9 font-bold text-2xl">
        Add new child
      </h1>
      <FamilyForm />
    </div>
  );
};

export default CreateFamily;
