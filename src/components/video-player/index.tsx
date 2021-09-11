import React, { FC, useEffect, useRef } from 'react';
import DPlayer from 'dplayer';
import Hls from 'hls.js';
export interface VideoPlayerProps {}
const VideoPlayer: FC<VideoPlayerProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    new DPlayer({
      container: ref.current,
      video: {
        url: 'https://fqzy.cc/test13.mp4',
      },
    });
  }, []);

  return <div ref={ref} id="dplayer"></div>;
};

export default VideoPlayer;
