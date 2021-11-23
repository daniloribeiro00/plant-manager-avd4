import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { theme } from './src/global/styles/theme';

export default function App() {
	return (
		<>
			<StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</>
	);
}
