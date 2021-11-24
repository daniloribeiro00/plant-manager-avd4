import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
	height: 56px;
	width: 56px;
	background-color: ${({ theme }) => theme.colors.green};
	border-radius: 15px;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
`;

export const Icon = styled(AntDesign)`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.white};
`;
