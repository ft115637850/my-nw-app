import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
const gui = require('nw.gui');
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

const muiTheme = {
	palette: {
		primary1Color: '#007626',
		accent1Color: '#478ECC'
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isKioskMode: false };
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
				<div style={styles.container}>
					<div style={styles.welcome}>Welcome to React Native in Node Webkit!</div>
					<div style={styles.instructions}>To get started, edit App.js</div>
					<p style={styles.instructions}>Double tap R on your keyboard to reload, Shake or press menu button for dev menu</p>
					<RaisedButton label={this.state.isKioskMode ? 'Quit' : 'Kiosk'} primary={true} onClick={() => {
						if (this.state.isKioskMode) {
							gui.Window.get().leaveKioskMode();
							this.setState({ isKioskMode: false });
						} else {
							gui.Window.get().enterKioskMode();
							this.setState({ isKioskMode: true });
						}
					}}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
