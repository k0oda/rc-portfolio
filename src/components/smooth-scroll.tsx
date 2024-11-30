import { ReactNode } from 'react';

import { ReactLenis } from 'lenis/react'

interface Props {
  children?: ReactNode
}

export function SmoothScroll({ children }: Props) {  
  return (
    <ReactLenis
      root
      options={{
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;