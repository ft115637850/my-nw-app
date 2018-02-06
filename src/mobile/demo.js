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
import string from '../strings';
import demoModule from '../modules/demo';
const { actions, selectors } = demoModule;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row'
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
	ios: string.demo.ios,
	android: string.demo.android
});

class Demo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={{flex: 1}}>
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.instructions}>To get started, edit App.js</Text>
					<Text style={styles.instructions}>{instructions}</Text>
					<View style={styles.buttonContainer}>
						<Button raised={true} primary={true} text="PING" onPress={() => this.props.pingServer()}/>
						<Button raised={true} primary={true} text="CLEAR" onPress={() => this.props.clearPing()}/>
					</View>
					<Text style={styles.instructions}>{this.props.pingResult}</Text>
				</ScrollView>
			</View>);
	}
}

const mapStateToProps = state => {
	return {
		pingResult: selectors.getPingResult(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		pingServer: () => dispatch(actions.pingServer()),
		clearPing: () => dispatch(actions.pingSuccess(''))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
