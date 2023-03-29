import {useState, useEffect } from 'react'
import { MediaPlayer } from 'dashjs'

const useDashJS = () => {
  useEffect(()=> {
    const videoElement = document.querySelector('#test-video-player')
    const videoUrl = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"
    const player = MediaPlayer().create()
    player.initialize(videoElement, videoUrl, true);
  }, [])

  return true
}

export { useDashJS }
