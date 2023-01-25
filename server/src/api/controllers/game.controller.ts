import {prisma} from "../../config/db";
import {Request} from "../../types";
import {Response} from "express";
import {moveValidation} from "../validations/game.validation";
import {generateMove, getNexGameState} from "../logic/game";


export const getGameById = async (id: string) =>
	await prisma.game.findFirst({
		where: {
			id
		}
	})

export const startGame = async (req: Request, res: Response) => {
	const newGame = await prisma.game.create({
		data: {
			computerMoves: [generateMove()]
		}
	})
	
	return res.status(201).json(newGame)
}

export const move = async (
	req: Request<unknown, typeof moveValidation["_output"]["body"], typeof moveValidation["_output"]["params"]>,
	res: Response) => {
	const game = await getGameById(req.params.gameId)
	
	if (!game) return res.status(400).json({message: 'no game found for this id!'})
	
	if (game.gameOver) return res.status(200).json({message: 'this game is over!'})
	
	const newGameState = getNexGameState(game, req.body.move)
	
	const updatedGame = await prisma.game.update({
		where: {
			id: req.params.gameId
		},
		data: newGameState
	})
	
	return res.status(200).json(updatedGame)
}
