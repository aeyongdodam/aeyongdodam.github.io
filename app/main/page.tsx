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
  const router = useRouter() // useRouter 훅 사용

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
  const handleImageClick = () => {
    document.body.style.overflow = 'hidden' // 스크롤 방지
    const imageElement = document.getElementById('algorithmImage')
    if (imageElement) {
      imageElement.style.position = 'fixed'
      imageElement.style.top = '0'
      imageElement.style.left = '0'
      imageElement.style.width = '100%'
      imageElement.style.height = '100%'
      imageElement.style.objectFit = 'cover'
      imageElement.style.transition = 'transform 0.8s ease'
      imageElement.style.transform =
        'rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)'

      setTimeout(() => {
        document.body.style.overflow = '' // 스크롤 복원
        router.push('/algorithm')
      }, 500)
    }
  }

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
      <div className="scale(${scale}) absolute ml-60p mt-9p h-24p  w-20p p-4">
        <div onClick={handleImageClick}>
          {algorithmImage ? (
            <Image
              id="algorithmImage" // ID 추가
              src={algorithmImage}
              alt="Algorithm Snapshot"
              fill={true}
              style={{
                objectFit: 'contain',
                cursor: 'pointer',
                transform: `rotateX(-55deg)  rotateY(1deg) rotateZ(-45deg)`,
                borderRadius: '10px', // 모서리 둥글게
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', // 그림자 효과
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
        </div>
      </div>
    </div>
  )
}
