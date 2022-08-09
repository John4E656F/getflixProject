import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";


const options = {
fill: true,
fluid: true,
responsive: true,
preload: "auto",
controls: true,
html5: {
  vhs: {
   enableLowInitialPlaylist: false,
    smoothQualityChange: true,
    overrideNative: true
  }
},
playbackRates: [0.25, 0.5],
sourceOrder: true
};

export default function VideoViewer(props) {
  const { src } = props;
  const classes = useStyles();
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const videoPlayer = videojs(videoRef.current, options);
    setPlayer(videoPlayer);

    return () => videoPlayer.dispose();
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src([
        {
          src: src.replace(".mp4", "/master.m3u8"),
          type: "application/x-mpegURL"
        },
        {
          src,
          type: "video/mp4"
        }
      ]);
    }
  }, [src, player]);

  return (
    <div data-vjs-player>
        <video ref={videoRef} className="" />
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
        <div className="Genres">{props.genres}</div>
        <div className="Types">{props.types}</div>
    </div>
  );
}

VideoViewer.propTypes = {
  src: PropTypes.string.isRequired
};





