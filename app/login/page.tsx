import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Netflix',
}

function LoginPage() {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center md: bg-transparent">
      <Image
        src="https://rb.gy/p2hphi"
        fill
        alt=""
        className="-z-10 hidden! opacity-60 sm:inline!"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default LoginPage
