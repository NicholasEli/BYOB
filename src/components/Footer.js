import Instagram from './icons/Instagram.js';

const Footer = function () {
	return (
		<footer>
			>
			<div className="container container--padding">
				<div className="row">
					<div className="col-xs-12 col-md-6 footer__nav">
						<h6>[B.Y.O.B.]</h6>
						<p>Vancouver / Portland / Seattle</p>
					</div>
					<div className="col-xs-12 col-md-3 footer__logo">
						<nav className="col-xs-12 center-xs">
							<ul>
								<li>
									<a href="">Home</a>
								</li>
								<li>
									<a href="">Link</a>
								</li>
								<li>
									<a href="">Link</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-xs-12 col-md-3 footer__social">
						<a>
							Follow Us <Instagram />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
