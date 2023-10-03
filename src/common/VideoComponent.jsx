import React from "react";
import YouTube from "react-youtube";

const VideoComponent = () => {
  const opts = {
    height: "750",
    width: "100%",
    playerVars: {
      controls: 0,
      mute: 1,
      autoplay: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    },
  };

  const videoId = "G3IMWKqpq7w";

  const onVideoReady = (event) => {
    const player = event.target;
    player.getIframe().style.pointerEvents = "none";
    player.getIframe().classList.add("video-hover");
  };

  const onVideoEnd = (event) => {
    const player = event.target;
    player.seekTo(0);
  };

  <YouTube
    videoId={videoId}
    opts={opts}
    onReady={onVideoReady}
    onEnd={onVideoEnd}
  />;

  return (
    <div className="container=fluid video-container">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onVideoReady}
        onEnd={onVideoEnd}
      />
    </div>
  );
};

export default VideoComponent;
