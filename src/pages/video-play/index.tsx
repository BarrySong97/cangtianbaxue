import VideoPlayer from '@/components/video-player';
import React, { FC } from 'react';
export interface VideoPlayProps {}
const VideoPlay: FC<VideoPlayProps> = () => {
  return (
    <div>
      <VideoPlayer />
    </div>
  );
};

export default VideoPlay;
