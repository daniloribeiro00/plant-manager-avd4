import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
	font-size: 40px;
	font-weight: 700;
	text-align: center;
	color: ${({ theme }) => theme.colors.heading};
`;

export const Image = styled.Image`
	height: 310px;
	width: 320px;
	margin-top: 50px;
	margin-bottom: 50px;
`;

export const Paragraph = styled.Text`
	font-size: 15px;
	text-align: center;
	font-weight: 500;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.heading};
`;
