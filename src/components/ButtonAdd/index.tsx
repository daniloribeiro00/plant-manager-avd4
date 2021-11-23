import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

export const ButtonAdd = ({ ...props }: TouchableOpacityProps) => {
	return (
		<Container {...props}>
			<Icon name='plus' />
		</Container>
	);
};
