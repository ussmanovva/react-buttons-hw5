import styled from "styled-components";

const Button = ({ children, onClick, type, getOpen }) => {
	return (
		<ButtonStyled getopen={getOpen} onClick={onClick} type={type}>
			{children}
		</ButtonStyled>
	);
};

export default Button;

export const ButtonStyled = styled.button`
	width: 150px;
	height: 50px;

	margin: 15px 20px 0 0;

	cursor: pointer;
	font-size: 17px;
	font-weight: 600;
	border: none;
	border-radius: 5px;
	color: aliceblue;
	background: #007bff;

	&:hover {
		border: 1px solid #007bff;
		background-color: #007bff2e;
		color: #007bff;
	}
`;
