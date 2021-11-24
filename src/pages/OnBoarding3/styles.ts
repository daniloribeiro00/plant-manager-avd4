import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Emoji = styled.Text`
	font-size: 70px;
	text-align: center;
	margin-bottom: 20px;
`;

export const Title = styled.Text`
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	color: ${({ theme }) => theme.colors.heading};
`;

export const ParagraphContainer = styled.View`
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const Paragraph = styled.Text`
	font-size: 15px;
	text-align: center;
	font-weight: 500;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.heading};
`;
