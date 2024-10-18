import { auth } from '@/auth'
import React from 'react'

const DashboardPage = async () => {
    const session = await auth();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Selamat Datang : <span>{session?.user?.name} Role : {session?.user?.role}</span></h2>
      {/*
      <p>{JSON.stringify(session)}</p>
      */}
    </div>
  )
}

export default DashboardPage
