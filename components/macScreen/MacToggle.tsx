import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const MacToggle = ({ setLoaded }) => {
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    if (isRendered) {
      setLoaded(true)
      console.log('here')
    }
  }, [isRendered, setLoaded])

  return (
    <div className="absolute left-88p top-12p h-7p w-6.6p">
      <Image
        src="/Toggle.png"
        alt="toggle image"
        fill={true}
        style={{ objectFit: 'contain' }}
        onLoad={() => {
          setIsRendered(true)
        }}
      />
    </div>
  )
}

export default MacToggle
