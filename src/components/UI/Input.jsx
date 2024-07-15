import styled from "styled-components";

const Input = ({ checked, onChange }) => {
	return (
		<>
			<InputStyled type="checkbox" checked={checked} onChange={onChange} />
		</>
	);
};

export default Input;

const InputStyled = styled.input`
	width: 70px;
	height: 80px;
`;
