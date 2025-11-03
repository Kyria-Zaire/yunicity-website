'use client'

import React from 'react'
import { gsap } from 'gsap'
import './FlowingStatsMenu.css'

interface StatItem {
  chiffre: string
  label: string
  description: string
  image: string
}

interface FlowingStatsMenuProps {
  items: StatItem[]
}

function StatMenuItem({ chiffre, label, description, image }: StatItem) {
  const itemRef = React.useRef(null)
  const marqueeRef = React.useRef(null)
  const marqueeInnerRef = React.useRef(null)

  const animationDefaults = { duration: 0.6, ease: 'expo.inOut' }

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0)
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height)
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2
    const yDiff = y - y2
    return xDiff * xDiff + yDiff * yDiff
  }

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = (itemRef.current as HTMLElement).getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = (itemRef.current as HTMLElement).getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  const repeatedMarqueeContent = Array.from({ length: 2 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{label}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ))

  return (
    <div className="stats-menu__item" ref={itemRef}>
      <div
        className="stats-menu__item-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="stats-menu__content">
          <div className="stats-menu__chiffre">{chiffre}</div>
          <div className="stats-menu__label">{label}</div>
          <div className="stats-menu__description">{description}</div>
        </div>
      </div>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FlowingStatsMenu({ items }: FlowingStatsMenuProps) {
  return (
    <div className="stats-menu-wrap">
      <nav className="stats-menu">
        {items.map((item, idx) => (
          <StatMenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  )
}
