import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
	width: 100%;
	padding: 0 24px 0 24px;
	margin-top: 46px;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const Body = styled.View`
	width: 100%;
	padding: 0 24px 0 24px;
	align-items: flex-start;
`;

export const Title = styled.Text`
	font-size: 16px;
	font-weight: 700;
	text-align: center;
	color: ${({ theme }) => theme.colors.heading};
`;

export const Paragraph = styled.Text`
	font-size: 16px;
	text-align: center;
	font-weight: 500;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.heading};
`;

export const Options = styled.FlatList`
	margin-top: 20px;
	flex-direction: row;
	padding: 0 24px 0 24px;
`;

export const ButtonContainer = styled.View`
	width: 100%;
	padding: 0 24px 0 24px;
	align-items: center;
	margin-bottom: 65px;
`;
