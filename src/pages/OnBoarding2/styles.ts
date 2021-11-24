import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonContainer = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Emoji = styled.Text`
	font-size: 40px;
	text-align: center;
	margin-bottom: 20px;
`;

export const Title = styled.Text`
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	color: ${({ theme }) => theme.colors.heading};
`;

export const Input = styled.TextInput`
	width: 320px;
	height: 50px;
	border-bottom-width: 1px;
	text-align: center;
	font-size: 18px;
	border-color: ${({ theme }) => theme.colors.gray};
	margin-top: 30px;
	margin-bottom: 50px;
`;
