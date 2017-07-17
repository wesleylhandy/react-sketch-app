import React, {Component} from 'react';
import { Link } from 'react-router';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { SketchField, Tools} from 'react-sketch';

import Gallery from './Gallery';

const styles = {
	card: {
		textAlign: 'center',
		marginBottom: '100px'
	},
	cardText: {
		overflow: 'hidden',
		paddingLeft: '100px',
		paddingRight: '100px'
	},
	button: {
		margin: '12px'
	}
	
}

export default class WelcomePage extends Component {

	constructor() {
		super();
		this.state = {
			drawings: []
		}
	}

  save = () => {
    let drawings = this.state.drawings;
    drawings.push(this._sketch.toDataURL());
    this.setState({drawings});
  }

  clear = () => {
    this._sketch.clear();
    this._sketch.setBackgroundFromDataUrl('');
  }

	renderSketchField() {
		return (
			 <SketchField
        name='sketch'
        className='canvas-area'
        ref={(c) => this._sketch = c}
        width='100%'
        height='400px'
        tool={Tools.Pencil}
        color='black'
        lineWidth={3}
      />
		);
	}

	render() {
		return (
			<div>
				<Card style={styles.card}>
					<CardTitle title='Welcome!' subtitle='Draw Anything Below'></CardTitle>
					<CardText style={styles.cardText}>
						<div style={{borderStyle: 'dotted'}}>
							{this.renderSketchField()}
						</div>
					</CardText>
					<CardActions>
						<RaisedButton label="Clear" style={styles.button} onClick={this.clear}/>
						<RaisedButton label="Save" style={styles.button} onClick={this.save}/>
						<Link to={'secondpage'}>
	    				<RaisedButton label="Go To Second Page" primary={true} style={styles.button} />
	    			</Link>
					</CardActions>
				</Card>

				<Gallery drawings={this.state.drawings}/>
			</div>
		)
		
	}
}