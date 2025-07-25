export const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://firebasestorage.googleapis.com/v0/b/tutorialtest-a9d6b.appspot.com/o/homeHeaderImage--cropped.jpeg?alt=media&token=63396f93-3b16-4333-90ca-9ffccbd6d086"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/tutorialtest-a9d6b.appspot.com/o/Pastor%20Ken%20Birthday%20Reel.mp4?alt=media&token=666bfbbb-6627-4592-b9db-346d462b4c31"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};