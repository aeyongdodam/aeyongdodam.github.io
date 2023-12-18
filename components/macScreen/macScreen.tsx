import React from 'react'
import MacHeader from './macHeader'
import MacContent from './macContent'
import MacToggle from './MacToggle'

const MacScreen = ({ text }: { text: string }) => {
  return (
    <div className="relative min-h-screen">
      <MacHeader text={text} />
      <MacToggle />
      <MacContent />
    </div>
  )
}

export default MacScreen
