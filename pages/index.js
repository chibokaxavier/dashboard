import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import TopCards from '@/components/TopCards'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Header/>
     <TopCards/>
    </main>
  )
}
