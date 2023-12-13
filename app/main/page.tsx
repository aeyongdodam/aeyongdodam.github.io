import React from 'react'
import Image from 'next/image'
import Algorithms from '@/components/algorithm/algorithm'
import Link from 'next/link'

export default function Home() {
  const scale = 1 / 5

  return (
    <div className="relative flex min-h-screen items-start bg-white">
      <div className="absolute ml-36p mt-7.5p h-45p w-30p">
        <Image
          src="/main.svg"
          alt="mac image"
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        className="absolute ml-60p mt-9p h-24p w-20p overflow-hidden p-4"
        style={{
          border: '1px solid black',
          cursor: 'pointer',
          transform: `rotateX(-55deg) rotateY(1deg) rotateZ(-45deg)`,
        }}
      >
        <Link href="/algorithm">
          <div
            style={{
              transform: `scale(${scale})`,

              transformOrigin: 'top left',
            }}
          >
            <div style={{ width: '1440px', height: '900px' }}>
              <Algorithms />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
