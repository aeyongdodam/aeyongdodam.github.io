import React from 'react'
import MacHeader from './macHeader'
import MacContent from './macContent'

const MacScreen = ({ text }: { text: string }) => {
  return (
    <div className="relative min-h-screen">
      <MacHeader text={text} />
      <MacContent />
    </div>
  )
}

export default MacScreen
