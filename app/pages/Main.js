import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Main extends Component {
	

	render() {
		return (
			<MuiThemeProvider>
				{this.props.children}
			</MuiThemeProvider>
		);
	}
}