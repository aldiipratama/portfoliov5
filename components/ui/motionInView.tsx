"use client"
import { MotionStyle, TargetAndTransition, Transition, VariantLabels, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ViewportOptions {
  margin?: string;
}

interface InitialOptions {
  x?: string | number;
  y?: string | number;
  z?: string | number;
  translateX?: string | number;
  translateY?: string | number;
  translateZ?: string | number;
  rotate?: string | number;
  rotateX?: string | number;
  rotateY?: string | number;
  rotateZ?: string | number;
  scale?: string | number;
  scaleX?: string | number;
  scaleY?: string | number;
  scaleZ?: string | number;
  skew?: string | number;
  skewX?: string | number;
  skewY?: string | number;
  originX?: string | number;
  originY?: string | number;
  originZ?: string | number;
  perspective?: string | number;
  transformPerspective?: string | number;
  opacity?: string | number;
}

export const MotionDiv = ({ children, className, viewport, initial, whileInView, transition, style }: { children: ReactNode, className?: string, viewport?: ViewportOptions, initial?: InitialOptions, whileInView?: TargetAndTransition, transition?: Transition, style?: MotionStyle }) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      style={style}
    >{children}</motion.div>
  )
}