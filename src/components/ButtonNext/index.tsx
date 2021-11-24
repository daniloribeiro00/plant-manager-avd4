import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

export const ButtonNext = ({ ...props }: TouchableOpacityProps) => {
	return (
		<Container {...props}>
			<Icon name='right' />
		</Container>
	);
};
