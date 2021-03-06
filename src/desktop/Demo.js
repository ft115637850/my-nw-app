import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Gui from 'nw.gui';
import Strings from '../strings';
import demoModule from '../modules/demo';
const { actions, selectors } = demoModule;

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
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
};

class Demo extends Component {
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.welcome}>Welcome to React Native in Node Webkit!</div>
				<div style={styles.instructions}>To get started, edit App.js</div>
				<p style={styles.instructions}>{Strings.demo.desktop}</p>
				<div style={{display: 'flex'}}>
					<RaisedButton label={this.props.isKioskMode ? 'Quit' : 'Kiosk'} primary={true} onClick={() => {
						if (this.props.isKioskMode) {
							Gui.Window.get().leaveKioskMode();
							this.props.updateKioskMode(false);
						} else {
							Gui.Window.get().enterKioskMode();
							this.props.updateKioskMode(true);
						}
					}}
					/>
					<RaisedButton label={'PING'} primary={true} onClick={() => this.props.pingServer()}/>
					<RaisedButton label={'CLEAR'} primary={true} onClick={() => this.props.clearPing()}/>
				</div>
				<p style={styles.instructions}>{this.props.pingResult}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		pingResult: selectors.getPingResult(state),
		isKioskMode: selectors.isKioskMode(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		pingServer: () => dispatch(actions.pingServer()),
		updateKioskMode: isKioskMode => dispatch(actions.goKioskMode(isKioskMode)),
		clearPing: () => dispatch(actions.pingSuccess(''))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
