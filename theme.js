import React from 'react';

const palette = {
	blue: '#85b7bc',
	white: '#efeae6',
	brown: '#422413',
    // secondBrown: '#73584b',
    lightBrown: '#c59775',
	// brownGradient: 'linear-gradient(270deg, #422413, #85b7bc)',
    gray: '#c0bfc3',
	yellow: '#ead702',
};

const defaultTheme = {
	dark: false,
	colors: {
		bgApp: palette.white,
		textSecondary: palette.gray,
		third: palette.yellow,
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
	},

	icons: {
		regular: {
			width: 14,
			flex: 1,
			marginRight: 4,
			justifyContent: 'center',
		},
	},

	shadows: {
		base: {
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.23,
			shadowRadius: 2.62,

			elevation: 4,
		},
	},

	dimens: {
		zero: 0,
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
		xxl: 60,
	},
};

export { defaultTheme };
// type ThemeType = typeof defaultTheme;
// type ThemeColor = keyof ThemeType['colors'];

// export type { ThemeType, ThemeColor };
export const ThemeContext = React.createContext(defaultTheme);
