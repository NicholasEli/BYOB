const Banner = function () {
	return (
		<section className="banner-video">
			<div className="banner-video__content">
				<h1>[B.Y.O.B.]</h1>
				<p>Bring your own bank</p>
			</div>
			<video autoPlay loop muted playsInline preload="auto">
				<source src="banner-video.mp4" type="video/mp4" />
			</video>
		</section>
	);
};

export default Banner;
