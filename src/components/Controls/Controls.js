import React, {Component} from 'react';

class Controls extends Component {

	render() {
		return (
			<div className="controls">
				<button onClick={() => this.props.newGame()}>New Game</button>
			</div>
		);
	}

}

export default Controls;