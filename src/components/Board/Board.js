import React, { Component } from 'react';
import './Board.css';
import {GameStatus} from '../../constants/GameStatus';
import {Direction} from '../../constants/Direction';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			snakeColor: [],
			snakeStringCells: [],
			timer: null
		};
	}

	render() {
		return (
			<div className="board-wrapper">
				<table className="board">
					<tbody>
						{ this.renderCells() }
					</tbody>
				</table>
			</div>
		);
	}

	renderCells() {
		return new Array(this.props.rows).fill(0).map((_, i) => (
			<tr key={i}>
				{
					new Array(this.props.columns).fill(0).map((_, j) => (
						<td className={this.getCellClassNames(i, j)} key={j} style={this.getCellStyles(i, j)}>
						</td>
					))
				}
			</tr>
		));
	}

	getSnakeColor(snake) {
		const n = snake.length;
		const head = [220, 20, 20];
		const tail = [220, 220, 220];
		const maxGrad = 20;

		const numColors = Math.min(maxGrad, Math.max(5, n));

		const rStep = (head[0] - tail[0]) / (numColors - 1);
		const gStep = (head[1] - tail[1]) / (numColors - 1);
		const bStep = (head[2] - tail[2]) / (numColors - 1);

		const gradColors = new Array(numColors).fill('').map((_, i) => {
			return [
				Math.round(head[0] - rStep * i),
				Math.round(head[1] - gStep * i),
				Math.round(head[2] - bStep * i)
			];
		});

		if (n > maxGrad) {
			const tailBlocks = new Array(n - maxGrad).fill(tail);
			return [...gradColors, ...tailBlocks];
		} else if (gradColors.length > n) {
			return gradColors.slice(0, n);
		} else {
			return gradColors;
		}
	}

	componentDidMount() {
		this.props.newGame();
		document.addEventListener('keydown', event => this.onKeyPress(event));
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			snakeColor: this.getSnakeColor(nextProps.snake),
			snakeStringCells: nextProps.snake.map(cell => cell.toString())
		});

		if (nextProps.gameId !== this.props.gameId) {
			this.startTimer();
		}
	}

	startTimer() {
		this.stopTimer();
		this.setState({
			timer: setInterval(() => {
				if (this.props.gameStatus === GameStatus.GAME_OVER) {
					this.stopTimer();
					console.log('Game over')
				} else {
					this.props.tick();
				}
			}, 600)
		})
	}

	stopTimer() {
		if (this.state.timer !== null) {
			clearInterval(this.state.timer);
		}
	}

	getCellClassNames(row, col) {
		const classes = ['cell'];
		const snakeIndex = this.state.snakeStringCells.indexOf([row, col].toString());

		if (snakeIndex > -1) {
			classes.push('cell-snake');

			if (snakeIndex === this.state.snakeStringCells.length - 1) {
				classes.push('snake-tail');
			}

		}
		else if (this.props.food && this.props.food.toString() === [row, col].toString()) {
			classes.push('cell-food');
		}
		else {
			classes.push('cell-empty');
		}

		return classes.join(' ');
	}

	getCellStyles(row, col) {
		const snakeIndex = this.state.snakeStringCells.indexOf([row, col].toString());

		if (snakeIndex === -1) {
			return null;
		} else {
			const color = this.state.snakeColor[snakeIndex];
			return {
				backgroundColor: `rgb(${color.join(',')})`
			};
		}
	}

	onKeyPress(event) {
		if (this.props.gameStatus !== GameStatus.IN_PROGRESS) {
			return;
		}
		if (event.keyCode === 37) {

			if (this.props.snake.length === 1 || this.props.direction !== Direction.RIGHT) {
				this.props.moveLeft();
				console.log('start timer')
				this.startTimer();
			}

		} else if (event.keyCode === 38) {

			if (this.props.snake.length === 1 || this.props.direction !== Direction.DOWN) {
				this.props.moveUp();
				this.startTimer();
			}

		} else if (event.keyCode === 39) {

			if (this.props.snake.length === 1 || this.props.direction !== Direction.LEFT) {
				this.props.moveRight();
				this.startTimer();
			}

		} else if (event.keyCode === 40) {

			if (this.props.snake.length === 1 || this.props.direction !== Direction.UP) {
				this.props.moveDown();
				this.startTimer();
			}

		}
	}

}

export default Board;
