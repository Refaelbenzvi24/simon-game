import {useEffect, useState} from "react";
import useShowMoves from "./useShowMoves";
import {ButtonType, Game, GameControllerOptions} from "../types";
import {gameMove, newGame} from "../services/game";

const HIGHEST_SCORE_STORAGE = 'highest_score'

const getHighestScore = () => {
	const localStorageValue = localStorage.getItem(HIGHEST_SCORE_STORAGE)
	
	if (localStorageValue) return Number(localStorageValue)
	
	return 0
}

const useGameManager = () => {
	const [gameControllerState, setGameControllerState] = useState<GameControllerOptions>('computer')
	const [gameState, setGameState] = useState<Game>()
	
	const [highestScore, setHighestScore] = useState(getHighestScore())
	
	const {
		isRedButtonActive, isGreenButtonActive, isBlueButtonActive, isYellowButtonActive, showMoves
	} = useShowMoves(() => setGameControllerState('user'))
	
	const manageHighestScore = (score: number) => {
		if (score > highestScore) {
			setHighestScore(score)
			localStorage.setItem(HIGHEST_SCORE_STORAGE, `${score}`)
		}
	}
	
	const newRound = (game: Game) => {
		setGameState(game)
		manageHighestScore(game.score)
		setGameControllerState('computer')
		showMoves(game.computerMoves)
	}
	
	const handleClick = async (move: ButtonType) => {
		const newGameState = await gameMove(gameState!.id, move)
		if (newGameState.gameOver) return initializeNewGame()
		
		if (gameState!.score < newGameState.score) return newRound(newGameState)
		setGameState(newGameState)
	}
	
	const initializeNewGame = async () => {
		const game = await newGame()
		setGameState(game)
		setGameControllerState('computer')
		showMoves(game.computerMoves)
	}
	
	useEffect(() => {
		void initializeNewGame()
	}, [])
	
	return {
		isRedButtonActive, isGreenButtonActive, isBlueButtonActive, isYellowButtonActive,
		gameControllerState, handleClick, highestScore, gameState
	}
}

export default useGameManager
