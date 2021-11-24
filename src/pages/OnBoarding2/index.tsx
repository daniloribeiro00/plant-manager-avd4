import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Container, Emoji, Title, Input, ButtonContainer } from './styles';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const OnBoarding2 = () => {
	const { navigate } = useNavigation<HomeScreenProp>();
	const [name, setName] = useState('');

	const handleNext = () => {
		if (name.trim() !== '') {
			navigate('OnBoarding3');
		}
	};

	useEffect(() => {
		const saveData = async () => {
			await AsyncStorage.setItem('plantManager', JSON.stringify(name));
		};
		saveData();
	}, [name]);

	return (
		<Container>
			<Emoji>😃</Emoji>
			<Title>Como podemos</Title>
			<Title>chamar você?</Title>
			<Input placeholder='Digite um nome' value={name} onChangeText={value => setName(value)} />
			{/* @ts-ignore */}
			<ButtonContainer opacity={name.trim() === '' ? 0.5 : 1}>
				<Button label='Confirmar' onPress={handleNext} />
			</ButtonContainer>
		</Container>
	);
};
