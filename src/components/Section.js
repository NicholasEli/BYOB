const Section = function (props) {
	if (!props) return;

	return (
		<section
			className={`section section--${props.layout} section--${props.theme} ${
				props.video ? 'section--video' : ''
			}`}
		>
			<div className="row">
				<div className={`col col-xs-12${props.image && !props.video ? ' col-md-7' : ''}`}>
					{props.video && (
						<video autoPlay loop muted playsInline preload="auto">
							<source src={props.video} type="video/mp4" />
						</video>
					)}
					<div className="container container--padding">
						{props.project && (
							<div className="section__project">
								{props.project.title && <h5>{props.project.title}</h5>}
								{props.project.text && <p>{props.project.text}</p>}
							</div>
						)}
						{props.title && <h2>{props.title}</h2>}
						{props.subTitle && <h3>{props.subTitle}</h3>}
						{props.text && <p>{props.text}</p>}
						{props.button && (
							<a
								href={props.button.url}
								className="button"
								target={props.button.newWindow ? 'target="_blank"' : ''}
							>
								{props.button.text}
							</a>
						)}
						{props.watermark && <p className="section__watermark">[B]</p>}
					</div>
				</div>
				{props.image && !props.video && (
					<div className="col-xs-12 col-md-5 section__image">
						{props.image && <img src={props.image} />}
					</div>
				)}
			</div>
		</section>
	);
};

export default Section;
