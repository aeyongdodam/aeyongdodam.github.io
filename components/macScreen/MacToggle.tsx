import Image from 'next/image'

const MacToggle = () => {
  return (
    <div className="absolute left-88p top-12p h-7p w-6.6p">
      <Image
        src="/Toggle.png"
        alt="toggle image"
        fill={true}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}

export default MacToggle
