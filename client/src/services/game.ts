import axios from "axios";
import {ButtonType, Game} from "../types";

const API_ENDPOINT = import.meta.env.API_ENDPOINT || 'http://localhost:3000/v1'

export const newGame = async (): Promise<Game> => {
	try {
		const {data} = await axios.post(`${API_ENDPOINT}/game/new`)
		return data
	} catch (error) {
		throw error
	}
}


export const gameMove = async (gameId: string, move: ButtonType): Promise<Game> => {
	try {
		const {data} = await axios.post(`${API_ENDPOINT}/game/${gameId}/move`, {move})
		return data
	} catch (error) {
		throw error
	}
}
