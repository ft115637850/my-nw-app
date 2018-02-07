import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import Demo from './Demo';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 25,
		padding: 10
	},
	header: {
		fontSize: 20
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	navItem: {
		display: 'flex',
		alignItems: 'center',
		padding: 10
	}
};

const Child = ({ match }) => (
	<div>
		<h3>URL: /{match.params.id}</h3>
	</div>
);

const ParamsExample = () => (
	<Router>
		<div style={styles.container}>
			<div style={styles.header}>Navigation</div>
			<ul style={styles.nav}>
				<li style={styles.navItem}><Link style={{textDecoration: 'none', color: 'black'}} to="/index.html">Demo</Link></li>
				<li style={styles.navItem}><Link style={{textDecoration: 'none', color: 'black'}} to="/netflix">Netflix</Link></li>
				<li style={styles.navItem}><Link style={{textDecoration: 'none', color: 'black'}} to="/zillow-group">Zillow Group</Link></li>
				<li style={styles.navItem}><Link style={{textDecoration: 'none', color: 'black'}} to="/yahoo">Yahoo</Link></li>
				<li style={styles.navItem}><Link style={{textDecoration: 'none', color: 'black'}} to="/modus-create">Modus Create</Link></li>
			</ul>
			<Switch>
				<Route exact={true} path="/index.html" component={Demo}/>
				<Route path="/:id" component={Child}/>
			</Switch>
		</div>
	</Router>
);

export default ParamsExample;
