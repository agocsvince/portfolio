import React, { useState, useRef, useEffect } from 'react';

interface VideoProjectContentProps {
  category: string;
  title: string;
  description?: string;
  videoSrc: string;
  originalSrc?: string;
}

const VideoProjectContent: React.FC<VideoProjectContentProps> = ({
  category,
  title,
  description,
  videoSrc,
  originalSrc,
}) => {
  const [aspectRatio, setAspectRatio] = useState<string | number>('16/9'); // Default 16:9
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset to default aspect ratio when video source changes
  useEffect(() => {
    setAspectRatio('16/9');
  }, [videoSrc]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const videoAspectRatio = video.videoWidth / video.videoHeight;
      // Use the calculated aspect ratio as a number (CSS accepts both string and number)
      setAspectRatio(videoAspectRatio);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg text-secondary">{category}</h2>
        {originalSrc ? (
          <a
            href={originalSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 underline"
          >
            <h1 className="text-2xl">{title}</h1>
          </a>
        ) : (
          <h1 className="text-2xl">{title}</h1>
        )}
      </div>
      {description && <p>{description}</p>}

      <div className="bg-light-primary p-4 text-dark-primary">
        <div
          className="w-full"
          style={{
            aspectRatio: aspectRatio,
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            autoPlay
            controls
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-contain"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoProjectContent;
