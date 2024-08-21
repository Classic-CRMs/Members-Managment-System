import React from 'react'
import Stats from '../StatsComponents/Stats'
import CustomerList from './CustomerList'

const MembersList = () => {
  return (
    <div>
        <Stats/>
        <div className="m-4"></div>
        <CustomerList/>

    </div>
  )
}

export default MembersList