import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import Routes from './Routes';
import createStoreWithEnhancers from '../reduxEnhancer';

const muiTheme = {
	palette: {
		primary1Color: '#007626',
		accent1Color: '#478ECC'
	}
};

class App extends Component {
	constructor() {
		super();
		this.store = createStoreWithEnhancers();
	}
	render() {
		return (
			<Provider store={this.store}>
				<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
					<Routes />
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
