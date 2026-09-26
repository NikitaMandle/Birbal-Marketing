const videos = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  src: `/assets/videos/video-${String(index + 1).padStart(2, '0')}.mp4`,
}))

export default function VideoGallery() {
  const pauseVideo = (event) => {
    event.currentTarget.pause()
  }

  const resumeVideo = (event) => {
    event.currentTarget.play().catch(() => {})
  }

  return (
    <section className="video-gallery" id="work">
      <div className="container">
        <div className="video-gallery-heading">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Ideas in motion</h2>
        </div>

        <div className="video-gallery-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                onMouseEnter={pauseVideo}
                onMouseLeave={resumeVideo}
              />
              <span className="video-card-label">Video {String(video.id).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}