import React from 'react'

const MacHeader = ({ text }: { text: string }) => {
  const isHighlighted = (label: string) =>
    text === label ? 'text-white bg-black px-2 py-1' : ''

  return (
    <div className="font-Akiv-Bold text-1.5p text-left">
      <p
        className={`top-14.2p left-8.75p absolute ${isHighlighted(
          'Portfolio',
        )}`}
      >
        Portfolio
      </p>
      <p
        className={`top-14.2p left-18.7p absolute ${isHighlighted(
          'Algorithm',
        )}`}
      >
        Algorithm
      </p>
      <p className={`top-14.2p left-29.6p absolute ${isHighlighted('Book')}`}>
        Book
      </p>
      <p className={`top-14.2p left-36.8p absolute ${isHighlighted('Etc')}`}>
        Etc
      </p>
      <p
        className={`top-14.2p left-42.6p absolute ${isHighlighted('DevStory')}`}
      >
        DevStory
      </p>
    </div>
  )
}

export default MacHeader
