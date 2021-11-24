import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 80px;
	height: 45px;
	background: ${({ theme }) => theme.colors.shape};
	border-radius: 15px;
	flex-direction: row;
	align-items: center;
	margin-right: 5px;
`;

export const Title = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.colors.heading};
	font-size: 13px;
	font-weight: 400;
	text-align: center;
`;
