import React from 'react';

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

const Button: React.FC<ButtonProps> = (props) => {
	return <button {...props} />;
};

export default Button;
