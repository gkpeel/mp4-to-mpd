import React from 'react';
import Navigation from '../Navigation';
import Title from "../Title";
import ConvertForm from '../ConvertForm';
import VideoPlayer from '../VideoPlayer';

function App() {
  return (
    <>
      <Navigation/>
      <div className='container mx-auto'>
        <div className='mb-8'>
          <Title tag="h3" className="my-4">Convert to MPD</Title>
          <p><strong>how it works?</strong></p>
          <ul>
            <li>easiest: upload an MP4 and receive an zip folder containing the MPD manifest and the mp4</li>
            <li>More complex workflows, upload an MP4, audio, track subtitle (.vtt) track</li>
            <li>Advanced workflows, use the config settings to select the compression settings for the mp4</li>
          </ul>
        </div>
        <ConvertForm/>
        <VideoPlayer />
      </div>
    </>
  );
}

export default App;