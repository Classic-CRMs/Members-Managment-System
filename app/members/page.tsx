
import MembersList from '@/components/memberslist/MembersList'
import React from 'react'

const members = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='m-6 p-9 font-bold text-2xl'>Members List</h1>
      <MembersList/>
    </div>
  )
}

export default members