import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding1 } from '../pages/OnBoarding1';
import { OnBoarding2 } from '../pages/OnBoarding2';
import { OnBoarding3 } from '../pages/OnBoarding3';
import { Home } from '../pages/Home';

export type RootStackParamList = {
	OnBoarding1: undefined;
	OnBoarding2: undefined;
	OnBoarding3: undefined;
	Home: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='OnBoarding1' component={OnBoarding1} />
			<Screen name='OnBoarding2' component={OnBoarding2} />
			<Screen name='OnBoarding3' component={OnBoarding3} />
			<Screen name='Home' component={Home} />
		</Navigator>
	);
};
