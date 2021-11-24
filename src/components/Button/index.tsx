import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface IButton extends TouchableOpacityProps {
	label: string;
}

export const Button = ({ label, ...props }: IButton) => {
	return (
		<Container {...props}>
			<Title>{label}</Title>
		</Container>
	);
};
