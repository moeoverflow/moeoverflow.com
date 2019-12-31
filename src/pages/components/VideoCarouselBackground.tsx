import { range } from 'lodash';
import Carousel from 're-carousel';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInterval, useList } from 'react-use';
import { LoopApi } from '../../api/loop';

export interface VideoCarouselBackgroundProps {}

const CircleQueueLength = 2
const MinLengthReloadData = 1
const CarouselDuration = 15 * 1000

export function VideoCarouselBackground(props: VideoCarouselBackgroundProps) {
  const carouselRef = useRef<any>(null)

  const [loopIndex, updateLoopIndex] = useState(0)
  const [loops, { updateAt: updateLoopAt }] = useList<any>((new Array(CircleQueueLength)).fill(null))

  const getLoopData = useCallback(async () => {
    const { randomLoops } = await LoopApi.getRandomLoops(CircleQueueLength, "telegram-channel-the-best-animeloop")
    for (const i of range(CircleQueueLength)) {
      if (loops[i] === null) {
        updateLoopAt(i, randomLoops.pop())
      }
    }
  }, [loops, updateLoopAt])

  useEffect(() => {
    if (loops.filter((i) => i !== null).length <= MinLengthReloadData) {
      getLoopData()
    }
  }, [loops, getLoopData])

  useInterval(async () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.next()
      setTimeout(() => {
        updateLoopAt(loopIndex, null)
        updateLoopIndex((index) => (index + 1) >= CircleQueueLength ? 0 : index + 1)
      }, 1000)
    }
  }, CarouselDuration)

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 select-none bg-black" style={{ zIndex: -999 }}>
      <Carousel loop ref={carouselRef} className="pointer-events-none" style={{ zIndex: -888 }}>
        {loops.map((loop) => {
          return loop && (
            <video
              preload="auto"
              key={loop.uuid}
              loop muted autoPlay playsInline
              className="h-full w-full object-cover"
            >
              <source src={loop.files['mp4_1080p'] || loop.files['mp4_720p']} type="video/mp4" />
            </video>
          )
        })}
      </Carousel>
      <div
        className="absolute top-0 bottom-0 left-0 right-0"
        style={{
          zIndex: -777,
          background: `
            linear-gradient(70deg,
              rgba(0,0,0,0.9),
              rgba(0,0,0,0.85),
              rgba(0,0,0,0.75),
              rgba(0,0,0,0.6),
              rgba(0,0,0,0.3),
              rgba(0,0,0,0.1),
              rgba(0,0,0,0.1),
              rgba(255, 255, 255, 0.1)
            )`
        }}
      ></div>
    </div>
  )
}
