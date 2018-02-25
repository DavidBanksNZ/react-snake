import {createStore} from 'redux';

import {MOVE_SNAKE, NEW_GAME, TICK} from './actions';
import {GameStatus} from '../constants/GameStatus';
import {moveSnake} from './helpers/moveSnake';
import {newGame} from './helpers/newGame';


const initialState = {
	rows: 10,
	columns: 10,
	speed: 0.5,
	snake: [],
	food: null,
	direction: null,
	gameId: -1,
	gameStatus: GameStatus.NONE
};


function reducer(state = initialState, action) {
	switch (action.type) {

		case NEW_GAME:
			return newGame(state);

		case MOVE_SNAKE:
			return moveSnake(state, action.direction);

		case TICK:
			console.log('tick!');
			return moveSnake(state, state.direction);

		default:
			return state;
	}
}

export const store = createStore(reducer);
