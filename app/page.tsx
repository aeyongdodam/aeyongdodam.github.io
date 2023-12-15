import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MacScreen from '@/components/macScreen/macScreen'
import Algorithm from './algorithm/page'

export default function Home() {
  const scale = 1 / 5

  return (
    <div className="relative flex min-h-screen items-start">
      <div className="ml-36p mt-7.5p">
        <Image
          src="/main.svg"
          alt="Description of the image"
          width={400}
          height={400}
        />
      </div>
      <div
        className="absolute p-4"
        style={{
          width: '288px',
          height: '200px',
          overflow: 'hidden',
          border: '1px solid black',
          cursor: 'pointer',
          transform: `rotateX(-55deg) rotateY(1deg) rotateZ(-45deg)`,
          left: '850px',
          top: '140px',
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
              <Algorithm />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
