import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 100px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Content = styled.View``;

export const Greeting = styled.Text`
	font-size: 30px;
	font-weight: 300;
	line-height: 30px;
	color: ${({ theme }) => theme.colors.heading};
`;

export const UserName = styled.Text`
	font-size: 30px;
	font-weight: 700;
	line-height: 30px;
	color: ${({ theme }) => theme.colors.heading};
`;

export const Avatar = styled.Image`
	width: 56px;
	height: 56px;
	border-radius: 999px;
`;
