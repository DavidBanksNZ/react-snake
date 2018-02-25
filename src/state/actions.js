import {Direction} from '../constants/Direction';


export const MOVE_SNAKE = 'MOVE_SNAKE';
export const NEW_GAME = 'NEW_GAME';
export const TICK = 'TICK';


export function moveUp() {
	return {
		type: MOVE_SNAKE,
		direction: Direction.UP
	}
}

export function moveDown() {
	return {
		type: MOVE_SNAKE,
		direction: Direction.DOWN
	}
}

export function moveLeft() {
	return {
		type: MOVE_SNAKE,
		direction: Direction.LEFT
	}
}

export function moveRight() {
	return {
		type: MOVE_SNAKE,
		direction: Direction.RIGHT
	}
}

export function newGame() {
	return {
		type: NEW_GAME
	};
}

export function tick() {
	return {
		type: TICK
	}
}