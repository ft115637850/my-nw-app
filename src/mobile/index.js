import React, { Component } from 'react';
import { COLOR, ThemeProvider, Button, ListItem, Subheader } from 'react-native-material-ui';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Platform,
	UIManager
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
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
	constructor() {
		super();
		if (Platform.OS === 'android') {
		  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}
	render() {
		return (
			<ThemeProvider uiTheme={uiTheme}>
				<View style={styles.container}>
					<ScrollView style={{flex: 1}}>
						<Text style={styles.welcome}>
						  Welcome to React Native!
						</Text>
						<Text style={styles.instructions}>
						  To get started, edit App.js
						</Text>
						<Text style={styles.instructions}>
						  {instructions}
						</Text>
					</ScrollView>
					<Button raised={true} primary={true} text="Primary" />
				</View>
			</ThemeProvider>
		);
	}
}
