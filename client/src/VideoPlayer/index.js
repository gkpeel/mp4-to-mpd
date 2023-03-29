import React from 'react'
import { useDashJS } from "./useDashJS"

const VideoPlayer = props => {
  const dashJS = useDashJS();

  return (
    <div className='mt-8'>
      <video id="test-video-player" controls={true}></video>
    </div>
  )
}

export default VideoPlayer
