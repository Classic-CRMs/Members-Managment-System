import React from 'react'
import ChildInfo from '@/components/addchild/ChildInfo'

const AddChild = () => {
  return (
    <div>
      <h1 className="flex justify-start m-6 p-9 font-bold text-2xl">
        Add new child
      </h1>
      <ChildInfo />
    </div>
  )
}

export default AddChild