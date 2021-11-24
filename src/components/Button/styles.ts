import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 280px;
	height: 56px;
	background: ${({ theme }) => theme.colors.green};
	border-radius: 15px;
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.colors.white};
	font-size: 15px;
	font-weight: 500;
	text-align: center;
`;
