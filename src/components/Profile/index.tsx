import React from 'react';
import { Avatar } from '../Avatar';
import { Container, Content, User, Greeting, UserName, Message } from './styles';

export const Profile = () => {
	return (
		<Container>
			<Avatar urlImage='https://avatars.githubusercontent.com/u/68981163?v=4' />
			<Content>
				<User>
					<Greeting>Olá,</Greeting>
					<UserName>Danilo</UserName>
				</User>
				<Message>Hoje é dia de vitória!</Message>
			</Content>
		</Container>
	);
};
