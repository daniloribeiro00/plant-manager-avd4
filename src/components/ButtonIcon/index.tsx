import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, IconContainer, Icon, Title } from './styles';
import DiscordImg from '../../assets/discord.png';

export const ButtonIcon = ({ ...props }: TouchableOpacityProps) => {
	return (
		<Container {...props}>
			<IconContainer>
				<Icon source={DiscordImg} />
			</IconContainer>
			<Title>Entrar com Discord</Title>
		</Container>
	);
};
