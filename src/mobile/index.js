import React, { Component } from 'react';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import {
	Platform,
	UIManager
} from 'react-native';
import { Provider } from 'react-redux';
import Routes from './Routes';
import createStoreWithEnhancers from '../reduxEnhancer';

const uiTheme = {
	palette: {
		primaryColor: COLOR.green500
	},
	toolbar: {
		container: {
			height: 50
		}
	}
};

export default class App extends Component {
	constructor() {
		super();
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		this.store = createStoreWithEnhancers();
	}
	render() {
		return (
			<Provider store={this.store}>
				<ThemeProvider uiTheme={uiTheme}>
					<Routes />
				</ThemeProvider>
			</Provider>
		);
	}
}
