import Footers from '@/components/Footers/Footers'
import Innovativeteam from '@/components/Innovativeteams/Innovativeteam'
import Justwork from '@/components/Justwork/Justwork'
import Navbar from '@/components/Navbar/Navbar'
import Newsletter from '@/components/Newsletter/Newsletter'
import Opensource from '@/components/Opensource/Opensource'
import Pricing from '@/components/Pricing/Pricing'
import Securecard from '@/components/Securecard/Securecard'
import Zerotier from '@/components/Zerotier/Zerotier'
import { Just_Me_Again_Down_Here, Secular_One } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Justwork/>
    <Innovativeteam/>
    <Securecard/>
    <Pricing/>
    <Zerotier/>
    <Opensource/>
    <Newsletter/>
    <Footers/>
    
    
    </>
  )
}
