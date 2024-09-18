const Logo = ({ logoSrc, altText }) => {
	return (
		<div>
			<img src={logoSrc} alt={altText} />
			<h1>I-Organize</h1>
		</div>
	);
};

export default Logo;