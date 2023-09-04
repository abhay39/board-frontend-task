"use client"
import Image from 'next/image'
import Login from './signin/page'
import { useSession } from 'next-auth/react';
import Dashboard from './dashboard/page';

export default function Home() {
  const session=useSession();
  // console.log(session);
  
  return (
    <main>
      {session.status==='authenticated'?(<Dashboard />):(<Login />)}
    </main>
  )
}
