import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonNext } from '../../components/ButtonNext';
import IllustrationImg from '../../assets/watering.png';
import { Container, Image, Title, Paragraph } from './styles';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const OnBoarding1 = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const handleNext = () => {
		navigate('OnBoarding2');
	};

	return (
		<Container>
			<Title>Gerencie </Title>
			<Title>suas plantas de</Title>
			<Title>forma fácil</Title>
			<Image source={IllustrationImg} />
			<Paragraph>Não esqueça mais regar suas plantas.</Paragraph>
			<Paragraph>Nós cuidamos de lembrar você</Paragraph>
			<Paragraph>sempre que precisar.</Paragraph>
			<ButtonNext onPress={handleNext} />
		</Container>
	);
};
