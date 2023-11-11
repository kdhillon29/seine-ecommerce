import Image from 'next/image'
import Navbar from './components/Navbar'
import { getCurrentUser } from './api/lib/session'
import Container from './components/Container';


export default  async function Home() {
  const user =await getCurrentUser()
  // debugger;
  
  // console.log('user is ',user);

  return (
    <main className="flex min-h-screen flex-col  justify-between p-2">
      <Navbar/>
      <hr />
      <Container/>
    </main>
  )
}
