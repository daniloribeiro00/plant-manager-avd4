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
	margin-bottom: 42px;
`;
