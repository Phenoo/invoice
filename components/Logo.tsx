import { LampDesk } from 'lucide-react'
import React from 'react'

import { Luxurious_Roman, Pacifico } from 'next/font/google'
import Link from 'next/link'

const pacifico = Pacifico({ weight: "400", subsets:['latin'] })

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <div className='bg-black p-2 text-white rounded-md'>
        <LampDesk />
      </div>
      <h2 className={`${pacifico.className} text-xl font-semibold italic`} >
        Magixo
      </h2>
    </Link>
  )
}

export default Logo