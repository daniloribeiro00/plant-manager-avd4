import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 56px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
`;

export const IconContainer = styled.View`
	width: 56px;
	height: 56px;
	align-items: center;
	justify-content: center;
	border-right-width: 1px;
	border-color: ${({ theme }) => theme.colors.line};
`;

export const Icon = styled.Image`
	width: 24px;
	height: 24px;
`;

export const Title = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.colors.heading};
	font-size: 15px;
	font-weight: 500;
	text-align: center;
`;
