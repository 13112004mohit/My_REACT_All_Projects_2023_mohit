import React, { useState } from "react";
import "../style/video.css";
import VideoModal from "./VideoModal";

const image =
  "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJhd2luZyUyMGFpfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
const video = "https://www.youtube.com/embed/_UoPz5pnKQY";
const VideoGallery = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const openModal = (url) => {
    setSelectedVideoIndex(url);
  };

  const closeModal = () => {
    setSelectedVideoIndex(null);
  };

  return (
    <>
      <section className="two_container">
        <h1>Watch Free Tutorials from Our Coaches Right Now</h1>

        <div className="video_">
          <button className="vidoplayBTN" onClick={() => openModal(video)}>
            {
              <div className="imgbox">
                <img src={image} alt="" />
                <div class="request-loader">
                  <span>▶</span>
                </div>
              </div>
            }
          </button>
        </div>

        <VideoModal
          videoUrl={selectedVideoIndex}
          isOpen={selectedVideoIndex !== null}
          onClose={closeModal}
        />


      </section>
    </>
  );
};

export default VideoGallery;
