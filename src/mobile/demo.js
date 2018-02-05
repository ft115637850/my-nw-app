import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-material-ui';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Platform
} from 'react-native';
import demoModule from '../modules/demo';
const { actions, selectors } = demoModule;

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
    'Shake or press menu button for dev menu'
});

class Demo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={{flex: 1}}>
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.instructions}>To get started, edit App.js</Text>
					<Text style={styles.instructions}>{instructions}</Text>
					<Button raised={true} primary={true} text="PING SERVER" onPress={() => this.props.pingServer()}/>
					<Text style={styles.instructions}>{this.props.pingResult}</Text>
				</ScrollView>
			</View>);
	}
}

const mapStateToProps = state => {
	return {
		pingResult: selectors.getPingResult(state),
		isAuthenticated: selectors.isAuthenticated(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		pingServer: () => dispatch(actions.pingServer()),
		loginRequest: values => dispatch(actions.loginRequest(values))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);