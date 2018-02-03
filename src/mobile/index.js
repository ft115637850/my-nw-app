import React, { Component } from 'react';
import { COLOR, ThemeProvider, Button } from 'react-native-material-ui';
import {
	StyleSheet,
	View
} from 'react-native';

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default class App extends Component {
	render() {
		return (
			<ThemeProvider uiTheme={uiTheme}>
				<View style={styles.container}>
					<Button primary={true} text="Primary" />
					<Button accent={true} text="Accent" />
					<Button raised={true} primary={true} text="Primary" />
					<Button disabled={true} text="Disabled" />
				</View>
			</ThemeProvider>
		);
	}
}
