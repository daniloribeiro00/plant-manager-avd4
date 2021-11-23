import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';

export type RootStackParamList = {
	SignIn: undefined;
	Home: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='SignIn' component={SignIn} />
			<Screen name='Home' component={Home} />
		</Navigator>
	);
};
