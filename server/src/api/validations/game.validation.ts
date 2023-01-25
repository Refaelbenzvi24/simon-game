import {z} from "zod";

export const moveOptions = ['red', 'green', 'blue', 'yellow'] as const

export type MoveOptions = typeof moveOptions[number]

export const moveValidation = z.object({
	params: z.object({
		gameId: z.string().cuid()
	}),
	body: z.object({
		move: z.enum(moveOptions)
	})
})
