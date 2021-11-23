import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Image, Content, Title, SubTitle } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const SignIn = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const handleSignIn = () => {
		navigate('Home');
	};

	return (
		<Container>
			<Image source={IllustrationImg} />
			<Content>
				<Title>
					Conecte-se {'\n'} e organize {'\n'} suas jogatinas
				</Title>
				<SubTitle>Crie grupos para jogar seus games {'\n'} favoritos com seus amigos</SubTitle>
				<ButtonIcon onPress={handleSignIn} />
			</Content>
		</Container>
	);
};
