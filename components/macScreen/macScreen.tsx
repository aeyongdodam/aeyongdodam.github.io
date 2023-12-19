import React from 'react'
import MacHeader from './macHeader'
import MacContent from './macContent'
import MacToggle from './MacToggle'

const MacScreen = ({
  text,
  setMacToggleLoaded,
  setMacContentLoaded,
}: {
  text: string
  setMacToggleLoaded: (value: boolean) => void
  setMacContentLoaded: (value: boolean) => void
}) => {
  return (
    <div className="relative min-h-screen">
      <MacHeader text={text} />
      <MacToggle setLoaded={setMacToggleLoaded} />
      <MacContent setLoaded={setMacContentLoaded} />
    </div>
  )
}

export default MacScreen
