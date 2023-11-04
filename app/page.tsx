import Image from 'next/image'
import Navbar from './components/Navbar'
import { getCurrentUser } from './api/lib/session'

export default  async function Home() {
  const user =await getCurrentUser()
  console.log('user is ',user);

  return (
    <main className="flex min-h-screen flex-col  justify-between p-2">
      <Navbar/>
    </main>
  )
}
