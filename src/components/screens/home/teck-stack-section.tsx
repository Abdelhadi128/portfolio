import { H1 } from '@/components/ui/typography'
import React from 'react'

type teckProps = {
    teckRef: React.RefObject<HTMLDivElement | null>
}

export default function TeckStackSection({teckRef}: teckProps) {
  return (
    <div ref={teckRef} className='w-full h-screen text-white'>
      <H1 className='text-primary'>
        Tech Stack
      </H1>
    </div>
  )
}
