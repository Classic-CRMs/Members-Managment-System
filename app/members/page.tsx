
import MembersList from '@/components/memberslist/MembersList'
import React from 'react'

const members = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className="flex justify-start ml-4 my-14 font-bold text-2xl">
        All members
      </h1>
      <MembersList/>
    </div>
  )
}

export default members