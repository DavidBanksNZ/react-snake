import React from 'react';
import {connect} from 'react-redux';

import {moveDown, moveLeft, moveRight, moveUp, newGame, tick} from '../../state/actions';
import Board from '../Board/Board';
import Controls from '../Controls/Controls';

const Game = props => (
	<div>
		<Board
			gameId={props.gameId}
			gameStatus={props.gameStatus}
			rows={props.rows}
			columns={props.columns}
			food={props.food}
			snake={props.snake}
			direction={props.direction}
			newGame={props.newGame}
			moveDown={props.moveDown}
			moveUp={props.moveUp}
			moveLeft={props.moveLeft}
			moveRight={props.moveRight}
			tick={props.tick}
		/>
		<Controls
			newGame={props.newGame}
		/>
	</div>
);

const mapStateToProps = state => ({
	gameStatus: state.gameStatus,
	gameId: state.gameId,
	snake: state.snake,
	food: state.food,
	rows: state.rows,
	columns: state.columns,
	direction: state.direction
});

const mapDispatchToProps = dispatch => ({
	newGame: () => dispatch(newGame()),
	moveDown: () => dispatch(moveDown()),
	moveUp: () => dispatch(moveUp()),
	moveLeft: () => dispatch(moveLeft()),
	moveRight: () => dispatch(moveRight()),
	tick: () => dispatch(tick())
});

const GameComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Game);

export default GameComponent;

