import React from 'react'

const MacHeader = ({ text }: { text: string }) => {
  return (
    <h1 className="absolute left-9.2p top-14p text-left font-abhaya text-2p font-extrabold">
      {text}
    </h1>
  )
}

export default MacHeader
