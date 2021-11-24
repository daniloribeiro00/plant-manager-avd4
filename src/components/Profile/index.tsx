import React from 'react';
import { Container, Content, Greeting, UserName, Avatar } from './styles';

interface IProfile {
	name: string;
}

export const Profile = ({ name }: IProfile) => {
	return (
		<Container>
			<Content>
				<Greeting>Olá,</Greeting>
				<UserName>{name}</UserName>
			</Content>
			<Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/68981163?v=4' }} />
		</Container>
	);
};
