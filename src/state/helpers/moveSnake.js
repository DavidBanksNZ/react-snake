import {Direction} from '../../constants/Direction';
import {gameOver} from './gameOver';
import {getFoodPosition} from './getFoodPosition';

export function moveSnake(state, direction) {
	let next;

	switch (direction) {
		case Direction.UP:
			next = [state.snake[0][0] - 1, state.snake[0][1]];
			if (next[0] === -1) {
				return gameOver(state, state.direction);
			}
			break;

		case Direction.DOWN:
			next = [state.snake[0][0] + 1, state.snake[0][1]];
			if (next[0] === state.rows) {
				return gameOver(state, state.direction);
			}
			break;

		case Direction.LEFT:
			next = [state.snake[0][0], state.snake[0][1] - 1];
			if (next[1] === -1) {
				return gameOver(state, state.direction);
			}
			break;

		case Direction.RIGHT:
			next = [state.snake[0][0], state.snake[0][1] + 1];
			if (next[1] === state.columns) {
				return gameOver(state, state.direction);
			}
			break;

		default:
			break;
	}

	if (state.snake.map(cell => cell.toString()).indexOf(next.toString()) > -1) {
		return gameOver(state, state.direction);
	}

	if (state.food.toString() === next.toString()) {
		const snake = [next, ...state.snake];
		return {
			...state,
			snake,
			direction,
			food: getFoodPosition(snake, state.rows, state.columns)
		};
	}

	return {
		...state,
		direction,
		snake: [next, ...state.snake.slice(0, -1)]
	};
}