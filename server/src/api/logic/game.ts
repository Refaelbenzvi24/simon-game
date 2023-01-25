import {moveOptions, MoveOptions} from "../validations/game.validation";
import {Game} from "@prisma/client";

export const generateMove = () => {
	const random = Math.floor(Math.random() * 4)
	return moveOptions[random]
}

const getIsMovesEqual = (userMoves: string[], computerMoves: string[]) =>
	!userMoves
		.map((move, index) => computerMoves[index] === move)
		.includes(false)

const gameRound = (game: Game): Game => ({
	...game,
	computerMoves: [...game.computerMoves, generateMove()],
	userMoves: [],
	score: game.score + 1
})

const gameOver = (game: Game, move: MoveOptions): Game => ({
	...game,
	userMoves: [...game.userMoves, move],
	gameOver: true
})


export const getNexGameState = (game: Game, move: MoveOptions): Game => {
	const userMovesState = [...game.userMoves, move]
	const isMovesEqual = getIsMovesEqual(userMovesState, game.computerMoves)
	
	if (!isMovesEqual) return gameOver(game, move)
	
	if (userMovesState.length === game.computerMoves.length) return gameRound(game)
	
	return {
		...game,
		userMoves: [...game.userMoves, move]
	}
}
