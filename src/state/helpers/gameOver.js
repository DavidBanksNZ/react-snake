import {GameStatus} from '../../constants/GameStatus';

export function gameOver(state, direction) {
	return {
		...state,
		direction,
		gameStatus: GameStatus.GAME_OVER
	};
}