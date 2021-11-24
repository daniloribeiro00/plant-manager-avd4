import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface IOption extends TouchableOpacityProps {
	label: string;
}

export const Option = ({ label, ...props }: IOption) => {
	return (
		<Container {...props}>
			<Title>{label}</Title>
		</Container>
	);
};
