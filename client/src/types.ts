export const options = ['red', 'green', 'blue', 'yellow'] as const
export type ButtonType = typeof options[number]

export type GameControllerOptions = 'computer' | 'user'

export interface Game {
	id: string
	computerMoves: ButtonType[]
	userMoves: ButtonType[]
	score: number
	gameOver: boolean
}
