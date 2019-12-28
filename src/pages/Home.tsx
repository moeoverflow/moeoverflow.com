import React from 'react';
import { VideoCarouselBackground } from './components/VideoCarouselBackground';

export function Home() {
  return (
    <div className="h-full">
      <VideoCarouselBackground></VideoCarouselBackground>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="flex flex-col h-full bg-transparent text-white">
          <div className="flex-1"></div>
          <div className="flex-1">
            <div className="ml-8">
              <h1 className="mb-4 text-3xl font-medium">MOEOVERFLOW</h1>
              <h3 className="mb-8 text-lg font-light">We develop ACG related projects. {'(◉３◉)'}</h3>
              <a href="https://github.com/moeoverflow/moeoverflow">
                <button className="button is-primary">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
