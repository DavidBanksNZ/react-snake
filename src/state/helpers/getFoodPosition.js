export function getFoodPosition(snake, rows, columns) {
	const snakeCells = snake.map(cell => cell.toString());
	const availableCells = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (snakeCells.indexOf([i, j].toString()) === -1) {
				availableCells.push([i, j]);
			}
		}
	}

	const rand = Math.round(Math.random() * (availableCells.length - 1));
	return availableCells[rand];
}