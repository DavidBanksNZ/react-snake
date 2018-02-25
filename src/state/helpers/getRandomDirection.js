import {Direction} from '../../constants/Direction';

export function getRandomDirection() {
	const rand = Math.random();
	if (rand < 0.25) {
		return Direction.UP;
	} else if (rand < 0.5) {
		return Direction.DOWN;
	} else if (rand < 0.75) {
		return Direction.LEFT;
	} else {
		return Direction.RIGHT;
	}
}