'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Algorithms from '@/components/algorithm/algorithm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import html2canvas from 'html2canvas'

export default function Home() {
  const scale = 1 / 5
  const algorithmsContainerRef = useRef(null)
  const [algorithmImage, setAlgorithmImage] = useState('')

  const captureAlgorithms = () => {
    if (algorithmsContainerRef.current) {
      html2canvas(algorithmsContainerRef.current).then((canvas) => {
        const img = canvas.toDataURL('image/png')
        setAlgorithmImage(img)
      })
    }
  }
  useEffect(() => {
    captureAlgorithms()
  }, [])

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
      <div className="scale(${scale}) absolute ml-60p mt-9p h-24p w-20p  p-4">
        <Link href="/algorithm">
          {algorithmImage ? (
            <Image
              src={algorithmImage}
              alt="Algorithm Snapshot"
              fill={true}
              style={{
                objectFit: 'contain',
                border: '1px solid black',
                cursor: 'pointer',
                transform: `rotateX(-55deg)  rotateY(1deg) rotateZ(-45deg)`,
              }}
            />
          ) : (
            <div
              ref={algorithmsContainerRef}
              style={{ width: '1440px', height: '900px' }}
            >
              <Algorithms />
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}
