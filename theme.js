import React from 'react';

const palette = {
	blue: '#84ba8d',
	white: '#eae2d7',
	brown: '#422413',
	lightBrown: '#c59775',
};

const defaultTheme = {
	dark: false,
	colors: {
		bgApp: palette.white,
		textSecondary: palette.gray,
		second: palette.blue,
		main: palette.brown,
		bgTodo: palette.lightBrown,
		// gradient: palette.brownGradient,
	},

	text: {
		header: {
			fontFamily: 'luckiestguy-regular',
			fontSize: 20,
		},

		todoText: {
			fontFamily: 'roboto-regular',
			fontSize: 16,
		},

		inputText: {
			fontSize: 16,
			fontFamily: 'roboto-regular',
		},

		btnText: {
			fontFamily: 'roboto-medium',
			fontSize: 16,
		},

		modalText: {
			fontFamily: 'roboto-regular',
			fontSize: 20,
		},

		modalCompleted: {
			fontFamily: 'roboto-regular',
			fontSize: 24,
		},
	},
};

export { defaultTheme };
export const ThemeContext = React.createContext(defaultTheme);
