import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

import { Container, Emoji, Title, ParagraphContainer, Paragraph } from './styles';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const OnBoarding3 = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const handleNext = () => {
		navigate('Home');
	};

	return (
		<Container>
			<Emoji>😁</Emoji>
			<Title>Prontinho</Title>
			<ParagraphContainer>
				<Paragraph>Agora vamos começar a cuidar das suas</Paragraph>
				<Paragraph>plantinhas com muito cuidado.</Paragraph>
			</ParagraphContainer>
			<Button label='Começar' onPress={handleNext} />
		</Container>
	);
};
