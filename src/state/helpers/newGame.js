import {getFoodPosition} from './getFoodPosition';
import {GameStatus} from '../../constants/GameStatus';
import {getRandomDirection} from './getRandomDirection';

export function newGame(state) {
	const startRow = Math.round(0.5 * state.rows + 1 - 2 * Math.random());
	const startCol = Math.round(0.5 * state.columns + 1 - 2 * Math.random());

	const snake = [[startRow, startCol]];
	const food = getFoodPosition(snake, state.rows, state.columns);

	return {
		...state,
		gameStatus: GameStatus.IN_PROGRESS,
		gameId: state.gameId + 1,
		snake,
		food,
		direction: getRandomDirection()
	};
}