import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <p>Home</p>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default Home

