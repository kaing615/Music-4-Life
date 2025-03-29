import React, { useEffect, useRef, useState } from "react";
import ProgressCircle from "./ProgressCircle";
import "./AudioPlayer.css";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";

const AudioPlayer = ({ currentIndex, setCurrentIndex, total }) => {
  const location = useLocation();
  const playlist = location.state?.playlist || null;
  const songFromTrending = location.state?.song || null;
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false);

  const tracks = playlist ? playlist.songs : total;
  const currentTrack = songFromTrending || tracks[currentIndex] || null;
  const audioSrc = currentTrack?.preview_url;
  const youtubeID = currentTrack?.youtubeID;

  const audioRef = useRef(new Audio(audioSrc));
  const youtubeRef = useRef(null);
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < tracks.length - 1;
  const workerRef = useRef(null);

  useEffect(() => {
    // Tạo Web Worker bằng Blob
    const workerScript = `
      let timer;
      self.onmessage = function (e) {
        if (e.data === "start") {
          timer = setInterval(() => self.postMessage("tick"), 1000);
        } else if (e.data === "stop") {
          clearInterval(timer);
        }
      };
    `;
    const blob = new Blob([workerScript], { type: "application/javascript" });
    workerRef.current = new Worker(URL.createObjectURL(blob));

    workerRef.current.onmessage = () => {
      if (audioRef.current && !audioRef.current.paused) {
        setTrackProgress(audioRef.current.currentTime);
        if (audioRef.current.ended) {
          handleNext();
        }
      }
    };

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const startWorker = () => workerRef.current.postMessage("start");
  const stopWorker = () => workerRef.current.postMessage("stop");

  useEffect(() => {
    console.log("Bài hát hiện tại:", currentTrack);
  }, [currentTrack]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);

    if (youtubeID && youtubeRef.current) {
      youtubeRef.current.internalPlayer.setVolume(newVolume * 100);
    } else {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      if (youtubeID && youtubeRef.current) {
        youtubeRef.current.internalPlayer.setVolume(prevVolume * 100);
      } else {
        audioRef.current.volume = prevVolume;
      }
    } else {
      setPrevVolume(volume);
      setVolume(0);
      if (youtubeID && youtubeRef.current) {
        youtubeRef.current.internalPlayer.setVolume(0);
      } else {
        audioRef.current.volume = 0;
      }
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    audioRef.current.volume = volume;
  }, []);

  useEffect(() => {
    if (currentTrack) {
      const newAudioSrc = currentTrack.preview_url;
      if (newAudioSrc) {
        audioRef.current.pause();
        audioRef.current = new Audio(newAudioSrc);
        setTrackProgress(0);
        if (isReady.current) {
          audioRef.current.play();
          setIsPlaying(true);
          startTimer();
        } else {
          isReady.current = true;
        }
      }
    }
  }, [currentTrack]); // Thêm currentTrack vào dependency

  useEffect(() => {
    if (audioSrc && !youtubeID) {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(0);
      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        isReady.current = true;
      }
    }

    if (youtubeID && youtubeRef.current) {
      youtubeRef.current.internalPlayer.loadVideoById(youtubeID);
      setIsYouTubePlaying(true);
    }
  }, [currentIndex, playlist]);

  useEffect(() => {
    if (!youtubeID) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    clearInterval(intervalRef.current); // Xóa timer cũ nếu có

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000); // Kiểm tra mỗi giây
  };

  const handleNext = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(tracks.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const togglePlayPause = () => {
    if (youtubeID) {
      if (youtubeRef.current) {
        if (isYouTubePlaying) {
          youtubeRef.current.internalPlayer.pauseVideo();
          setIsPlaying(false);
          stopWorker();
        } else {
          youtubeRef.current.internalPlayer.playVideo();
          setIsPlaying(true);
          startWorker();
        }
      }
      setIsYouTubePlaying(!isYouTubePlaying);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const songImage = currentTrack?.cover || "default-image.jpg";
  const artists = currentTrack?.artist || [];

  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={isPlaying || isYouTubePlaying}
          image={songImage}
          size={300}
          color="#fff"
        />
      </div>

      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist my-[20px]">{artists}</p>
        <div className="player-right-bottom flex">
          {youtubeID ? (
            <YouTube
              videoId={youtubeID}
              ref={youtubeRef}
              opts={{
                height: "0",
                width: "0",
                playerVars: { autoplay: 1, controls: 0 },
              }}
              onPlay={() => setIsYouTubePlaying(true)}
              onPause={() => setIsYouTubePlaying(false)}
              onEnd={handleNext}
            />
          ) : (
            <WaveAnimation isPlaying={isPlaying} />
          )}
          <Controls
            isPlaying={isPlaying || isYouTubePlaying}
            setIsPlaying={togglePlayPause}
            handleNext={handleNext}
            handlePrev={handlePrev}
            hasPrev={hasPrev}
            hasNext={hasNext}
          />
          <div className="volume-control flex">
            <span onClick={toggleMute} style={{ cursor: "pointer" }}>
              {isMuted ? "🔇" : "🔊"}
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
