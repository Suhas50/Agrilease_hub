import React from 'react';
import video from '../asset/video.mp4';

function Video() {
  return (
    <div >
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-[100vw] h-[100vh] object-cover"
      />
    </div>
  );
}

export default Video;
