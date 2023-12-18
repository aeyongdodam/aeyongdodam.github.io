'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import html2canvas from 'html2canvas'
import MacScreen from '@/components/macScreen/macScreen'

export default function Home() {
  const scale = 1 / 5
  const algorithmsContainerRef = useRef(null)
  const bookContainerRef = useRef(null)
  const etcContainerRef = useRef(null)
  const devContainerRef = useRef(null)

  const [algorithmImage, setAlgorithmImage] = useState('')
  const [bookImage, setBookImage] = useState('')
  const [etcImage, setEtcImage] = useState('')
  const [devImage, setDevImage] = useState('')

  const router = useRouter() // useRouter 훅 사용

  const captureAlgorithms = () => {
    if (algorithmsContainerRef.current) {
      html2canvas(algorithmsContainerRef.current).then((canvas) => {
        const img = canvas.toDataURL('algorithm/png')
        setAlgorithmImage(img)
      })
    }
  }

  const captureEtc = () => {
    if (etcContainerRef.current) {
      html2canvas(etcContainerRef.current).then((canvas) => {
        const img = canvas.toDataURL('etc/png')
        setEtcImage(img)
      })
    }
  }

  const captureDev = () => {
    if (devContainerRef.current) {
      html2canvas(devContainerRef.current).then((canvas) => {
        const img = canvas.toDataURL('dev/png')
        setDevImage(img)
      })
    }
  }

  const captureBook = () => {
    if (bookContainerRef.current) {
      html2canvas(bookContainerRef.current).then((canvas) => {
        const img = canvas.toDataURL('book/png')
        setBookImage(img)
      })
    }
  }

  useEffect(() => {
    captureAlgorithms()
    captureBook()
    captureEtc()
    captureDev()
  }, [])

  const handleAlgorithmClick = () => {
    animateAndNavigate('algorithmImage', '/algorithm')
  }

  const handleDevClick = () => {
    animateAndNavigate('devImage', '/dev')
  }

  const handleBookClick = () => {
    animateAndNavigate('bookImage', '/book')
  }

  const handleEtcClick = () => {
    animateAndNavigate('etcImage', '/etc')
  }

  const containerIds = [
    'algorithmImageContainer',
    'bookImageContainer',
    'etcImageContainer',
    'devImageContainer',
  ] // 추가 컨테이너 ID가 있으면 배열에 추가

  const hideOtherContainers = (activeContainerId: string) => {
    containerIds.forEach((id) => {
      if (id !== activeContainerId) {
        const container = document.getElementById(id)
        if (container) {
          container.style.display = 'none'
        }
      }
    })
  }

  const animateAndNavigate = (imageId: string, path: string) => {
    document.body.style.overflow = 'hidden' // 스크롤 방지
    const imageElement = document.getElementById(imageId)

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
      const activeContainerId = `${imageId}Container`
      hideOtherContainers(activeContainerId)
      setTimeout(() => {
        document.body.style.overflow = '' // 스크롤 복원
        router.push(path)
      }, 1000)
    }
  }

  return (
    <div className="relative flex min-h-screen items-start">
      <div className="absolute ml-36p mt-7.5p h-45p w-30p">
        <Image
          src="/main.svg"
          alt="mac image"
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div
        id="algorithmImageContainer"
        className="scale(${scale}) absolute ml-60p mt-9p h-24p w-20p p-4"
      >
        <div onClick={handleAlgorithmClick}>
          {algorithmImage ? (
            <Image
              id="algorithmImage" // ID 추가
              src={algorithmImage}
              alt="Algorithm Snapshot"
              fill={true}
              className="cursor-pointer rounded-lg"
              style={{
                objectFit: 'contain',
                transform: `rotateX(-55deg)  rotateY(1deg) rotateZ(-45deg)`,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', // 그림자 효과
              }}
            />
          ) : (
            <div
              ref={algorithmsContainerRef}
              style={{
                position: 'absolute',
                left: '10000px',
                top: '10000px',
                width: '1440px',
                height: '900px',
              }}
            >
              <MacScreen text="Algorithm" />
            </div>
          )}
        </div>
      </div>
      <div
        id="bookImageContainer"
        className="scale(${scale}) absolute ml-56p mt-27p h-24p w-20p p-4"
      >
        <div onClick={handleBookClick}>
          {algorithmImage ? (
            <Image
              id="bookImage" // ID 추가
              src={bookImage}
              alt="book Snapshot"
              fill={true}
              className="cursor-pointer rounded-lg"
              style={{
                objectFit: 'contain',
                transform: `rotateX(-55deg)  rotateY(1deg) rotateZ(-45deg)`,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', // 그림자 효과
              }}
            />
          ) : (
            <div
              ref={bookContainerRef}
              style={{
                position: 'absolute',
                left: '10000px',
                top: '10000px',
                width: '1440px',
                height: '900px',
              }}
            >
              <MacScreen text="Book" />
            </div>
          )}
        </div>
      </div>

      <div
        id="etcImageContainer"
        className="scale(${scale}) absolute ml-26p mt-29p h-24p w-20p p-4"
      >
        <div onClick={handleEtcClick}>
          {etcImage ? (
            <Image
              id="etcImage" // ID 추가
              src={etcImage}
              alt="etc Snapshot"
              fill={true}
              className="cursor-pointer rounded-lg"
              style={{
                objectFit: 'contain',
                transform: `rotateX(-55deg)  rotateY(1deg) rotateZ(-45deg)`,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', // 그림자 효과
              }}
            />
          ) : (
            <div
              ref={etcContainerRef}
              style={{
                position: 'absolute',
                left: '10000px',
                top: '10000px',
                width: '1440px',
                height: '900px',
              }}
            >
              <MacScreen text="Etc" />
            </div>
          )}
        </div>
      </div>

      <div
        id="devImageContainer"
        className="scale(${scale}) absolute ml-38p mt-38p h-24p w-20p p-4"
      >
        <div onClick={handleDevClick}>
          {devImage ? (
            <Image
              id="devImage" // ID 추가
              src={devImage}
              alt="dev Snapshot"
              fill={true}
              className="cursor-pointer rounded-lg"
              style={{
                objectFit: 'contain',
                transform: `rotateX(-55deg)  rotateY(1deg) rotateZ(-45deg)`,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', // 그림자 효과
              }}
            />
          ) : (
            <div
              ref={devContainerRef}
              style={{
                position: 'absolute',
                left: '10000px',
                top: '10000px',
                width: '1440px',
                height: '900px',
              }}
            >
              <MacScreen text="DevStory" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
