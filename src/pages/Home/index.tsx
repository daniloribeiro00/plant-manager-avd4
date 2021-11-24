import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Profile } from '../../components/Profile';
import { Option } from '../../components/Option';
import { Button } from '../../components/Button';
import { Container, Header, Body, Title, Paragraph, Options, ButtonContainer } from './styles';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface IOption {
	name: string;
}

export const Home = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const [name, setName] = useState('');

	const [options] = useState<IOption[]>([
		{ name: 'Sala' },
		{ name: 'Quarto' },
		{ name: 'Cozinha' },
		{ name: 'Banheiro' },
		{ name: 'Quintal' },
		{ name: 'Varanda' },
	]);

	const handleLogout = () => {
		if (name.trim() !== '') {
			navigate('OnBoarding1');
		}
	};

	useEffect(() => {
		const loadData = async () => {
			const storedData = await AsyncStorage.getItem('plantManager');
			if (storedData) {
				setName(JSON.parse(storedData));
			}
		};
		loadData();
	}, []);

	return (
		<Container>
			<Header>
				<Profile name={name} />
			</Header>
			<Body>
				<Title>Em qual ambiente</Title>
				<Paragraph>você quer colocar sua planta?</Paragraph>
			</Body>
			<Options
				data={options}
				// @ts-ignore
				keyExtractor={item => item.name}
				// @ts-ignore
				renderItem={({ item }) => <Option label={item.name} style={{ opacity: '60%' }} />}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
			<ButtonContainer>
				<Button label='Sair' onPress={handleLogout} />
			</ButtonContainer>
		</Container>
	);
};
