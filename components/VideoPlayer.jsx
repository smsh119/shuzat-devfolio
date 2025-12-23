"use client";

function VideoPlayer({ url, title }) {
  return (
    <div>
      <iframe
        src={`${url}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        className="mx-auto aspect-video w-full sm:w-5/6"
      />
    </div>
  );
}

export default VideoPlayer;
