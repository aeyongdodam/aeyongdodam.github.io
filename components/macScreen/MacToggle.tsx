'use client'
import Image from 'next/image'
import { useEffect } from 'react'

const MacToggle = ({ setLoaded }: { setLoaded: (value: boolean) => void }) => {
  useEffect(() => {
    setLoaded(true) // 마운트 시 로드 완료로 간주
  }, [setLoaded])

  const handleLoadImage = () => {
    setLoaded(true)
  }

  return (
    <div className="absolute left-88p top-12p h-7p w-6.6p">
      {/*<Image
        src="/Toggle.png"
        alt="toggle image"
        fill={true}
        loading="eager"
        style={{ objectFit: 'contain' }}
        //onLoadingComplete={handleLoadImage}
      />*/}
      <img
        src="/Toggle.png"
        alt="toggle image"
        onLoadingComplete={handleLoadImage}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}

export default MacToggle
