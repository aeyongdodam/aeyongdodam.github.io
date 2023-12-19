'use client'

import React, { useState } from 'react'
import MacScreen from '@/components/macScreen/macScreen'

export default function Book() {
  const [isMacToggleLoaded, setIsMacToggleLoaded] = useState(false)
  const [isMacContentLoaded, setIsMacContentLoaded] = useState(false)

  const handlerSetToggle = (newvalue: boolean) => {
    setIsMacToggleLoaded(newvalue)
  }

  const handlerSetContent = (newvalue: boolean) => {
    setIsMacContentLoaded(newvalue)
  }

  return (
    <MacScreen
      text="Book"
      setMacToggleLoaded={handlerSetToggle}
      setMacContentLoaded={handlerSetContent}
    />
  )
}
