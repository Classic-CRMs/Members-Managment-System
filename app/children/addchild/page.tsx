import React from 'react'
import ChildInfo from '@/components/addchild/ChildInfo'

const AddChild = () => {
  return (
    <div>
      <h1 className="flex justify-start ml-28 my-14 font-bold text-2xl">
        Add New child
      </h1>
      <ChildInfo />
    </div>
  )
}

export default AddChild