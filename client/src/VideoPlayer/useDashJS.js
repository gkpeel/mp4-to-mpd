import React, {useState, useEffect } from 'react'
import { MediaPlayer } from 'dashjs'

const useDashJS = () => {
  useEffect(()=> {
    const videoElement = document.querySelector('#test-video-player')

    console.log(videoElement)
    const videoUrl = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"
    const player = MediaPlayer().create()
    player.initialize(videoElement, videoUrl, true);
    console.log('hello ma')
  }, [])

  return true
}

export { useDashJS }
