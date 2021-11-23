import React from 'react';
import { Container, AvatarImage } from './styles';

interface IAvatar {
	urlImage: string;
}

export const Avatar = ({ urlImage }: IAvatar) => {
	return (
		<Container>
			<AvatarImage source={{ uri: urlImage }} />
		</Container>
	);
};
