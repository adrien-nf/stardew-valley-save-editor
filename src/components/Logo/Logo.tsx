import logo from '../../images/main_logo.png';

export const Logo = () => {
	return (
		<img src={logo} alt="Logo" style={{
			pointerEvents: "none",
		}} />
	)
}