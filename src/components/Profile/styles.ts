import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.View``;

export const User = styled.View`
	flex-direction: row;
	align-items: flex-end;
`;

export const Greeting = styled.Text`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.heading};
	margin-right: 2px;
`;

export const UserName = styled.Text`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.heading};
`;

export const Message = styled.Text`
	color: ${({ theme }) => theme.colors.heading};
`;
